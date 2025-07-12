import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Image,
  ScrollView,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { steps } from '../../contexts/Steps';
import { formatValue, isValidCPF } from '../../contexts/Formatters';

const botAvatar = require('../../../assets/bot.png');

export default function AccountChatFlow() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string; time: string }[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  const current = step < steps.length ? steps[step] : null;
  const [isFinished, setIsFinished] = useState(false);


  const scrollToBottom = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const resetInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      if (step < steps.length && !isTyping && current?.type !== 'review') {
        showBotMessage('Você ainda está aí?');
      }
    }, 30000);
  };

  const showBotMessage = (msg: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: msg, time: getCurrentTime() }]);
      setIsTyping(false);
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    }, 3000);
  };

  useEffect(() => {
    if (current) {
      showBotMessage(current.label);
    }
  }, [step]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const fetchAddressFromCEP = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) throw new Error('CEP inválido');
      return `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
    } catch (err) {
      alert('Erro ao buscar endereço. Verifique o CEP.');
      return '';
    }
  };

  const handleNext = async () => {
    if (!current) return;
    Keyboard.dismiss();

    if (current.type === 'file') {
      setAnswers((prev: any) => ({ ...prev, [current.key]: current.image }));
      setStep((prev) => prev + 1);
      return;
    }

    if (!inputValue.trim()) return;

    if (current.type === 'cpf' && !isValidCPF(inputValue)) {
      alert('CPF inválido!');
      return;
    }

    const formatted = formatValue(current.key, inputValue.trim());
    setMessages((prev) => [...prev, { from: 'user', text: formatted, time: getCurrentTime() }]);

    if (current.key === 'cep') {
      const addressStr = await fetchAddressFromCEP(formatted);
      if (!addressStr) return;
      setAnswers((prev: any) => ({ ...prev, cep: formatted, address: addressStr }));
    } else {
      setAnswers((prev: any) => ({ ...prev, [current.key]: formatted }));
    }

    setInputValue('');
    setStep((prev) => prev + 1);
    resetInactivityTimer();
  };

  const renderReview = () => {
    const keysToShow = ['name', 'cpf', 'birthDate', 'email', 'phone', 'cep', 'address', 'houseNumber'];
    return (
      <>
        {keysToShow.map((key) => (
          <View key={key} style={styles.reviewItem}>
            <Text style={styles.botText}><Text style={{ fontWeight: 'bold' }}>{key.toUpperCase()}:</Text> {answers[key]}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsFinished(true);
            setMessages([
              { from: 'bot', text: '🎉 Cadastro finalizado com sucesso! Deixe a nota sobre mim abaixo!', time: getCurrentTime() },
            ]);
            setShowRating(true);
          }}

        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </>
    );
  };

  const handleRating = (star: number) => {
    setMessages(prev => [
      ...prev,
      { from: 'user', text: `Minha nota: ${star}`, time: getCurrentTime() },
    ]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          from: 'bot',
          text: 'Obrigado pela preferência! A equipe PlayBank agradece. Desejamos muito sucesso na sua jornada financeira. 🚀',
          time: getCurrentTime(),
        },
      ]);

      setTimeout(() => {
        navigation.navigate('Login');
      }, 5000);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={26} color="#fff" />
        </TouchableOpacity>

        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={[styles.chatContent, { paddingBottom: showRating ? 80 : 20 }]}
          ref={scrollRef}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msgObj, i) => (
            <Animated.View
              key={i}
              style={[
                msgObj.from === 'bot' ? styles.botMessage : styles.userMessage,
                {
                  opacity: fadeAnim,
                  flexDirection: msgObj.from === 'bot' ? 'row' : 'row-reverse',
                },
              ]}
            >
              {msgObj.from === 'bot' && <Image source={botAvatar} style={styles.avatar} />}
              <View style={styles.messageContent}>
                <Text style={msgObj.from === 'bot' ? styles.botText : styles.userText}>{msgObj.text}</Text>
                <Text style={styles.timestamp}>{msgObj.time}</Text>
              </View>
            </Animated.View>
          ))}

          {current?.key === 'review' && !isFinished && renderReview()}


          {isTyping && (
            <View style={styles.typing}>
              <Text style={styles.typingDot}>• • •</Text>
            </View>
          )}
        </ScrollView>

        {showRating && (
          <View style={[styles.ratingRow, { marginBottom: 20 }]}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} style={styles.ratingButton} onPress={() => handleRating(star)}>
                <Text style={styles.ratingText}>{star}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {step < steps.length && current?.type !== 'review' && !isTyping && (
          <View style={styles.inputArea}>
            {current.type === 'file' ? (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Simular envio</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Digite aqui..."
                  placeholderTextColor="#888"
                  value={inputValue}
                  onChangeText={setInputValue}
                  keyboardType={['cpf', 'birthDate', 'phone', 'cep'].includes(current.type) ? 'numeric' : current.type === 'email' ? 'email-address' : 'default'}
                />
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                  <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
