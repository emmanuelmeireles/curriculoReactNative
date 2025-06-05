import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';

function generateSecret() {
  let digits = [];
  while (digits.length < 4) {
    let d = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(d)) digits.push(d);
  }
  return digits.join('');
}

function getResult(secret, guess) {
  let bulls = 0, cows = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) bulls++;
    else if (secret.includes(guess[i])) cows++;
  }
  return { bulls, cows };
}

export default function Jogo() {
  const [secret, setSecret] = useState(generateSecret());
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      Alert.alert('Atenção', 'Digite 4 dígitos diferentes!');
      return;
    }
    const result = getResult(secret, guess);
    const entry = { guess, ...result };
    const newHistory = [entry, ...history];
    setHistory(newHistory);
    setGuess('');
    if (result.bulls === 4) {
      setFinished(true);
      Alert.alert('Parabéns!', 'Você acertou a senha!');
    } else if (newHistory.length >= 10) {
      setFinished(true);
      Alert.alert('Fim de Jogo', `Você atingiu 10 tentativas. Senha: ${secret}`);
    }
  };

  const handleShowSecret = () => {
    Alert.alert('Senha', `A senha é: ${secret}`);
  };

  const handleRestart = () => {
    setSecret(generateSecret());
    setHistory([]);
    setGuess('');
    setFinished(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo Senha (Bulls and Cows)</Text>
      <TouchableOpacity style={styles.secretButton} onPress={handleShowSecret}>
        <Text style={styles.secretButtonText}>Mostrar Senha</Text>
      </TouchableOpacity>
      {!finished && (
        <>
          <TextInput
            style={styles.input}
            value={guess}
            onChangeText={setGuess}
            keyboardType="number-pad"
            maxLength={4}
            placeholder="Digite 4 dígitos"
            editable={!finished}
          />
          <TouchableOpacity style={styles.button} onPress={handleGuess}>
            <Text style={styles.buttonText}>Tentar</Text>
          </TouchableOpacity>
        </>
      )}
      {finished && (
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Jogar Novamente</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.historyItem}>
            {index + 1}. {item.guess} - {item.bulls} Bulls, {item.cows} Cows
          </Text>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 16 }}>Nenhuma tentativa ainda.</Text>}
        style={{ marginTop: 24, width: '100%' }}
      />
      {finished && (
        <Text style={styles.finishedText}>
          {history[0]?.bulls === 4
            ? 'Você venceu!'
            : `Fim de jogo! A senha era: ${secret}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12, width: 180, fontSize: 18, marginBottom: 8, textAlign: 'center' },
  button: { backgroundColor: '#4F8EF7', padding: 14, borderRadius: 20, alignItems: 'center', marginTop: 8, width: 180 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  secretButton: { backgroundColor: '#f39c12', padding: 10, borderRadius: 16, marginBottom: 12 },
  secretButtonText: { color: '#fff', fontWeight: 'bold' },
  historyItem: { fontSize: 16, marginVertical: 2, textAlign: 'left' },
  finishedText: { marginTop: 16, fontSize: 18, color: '#e74c3c', fontWeight: 'bold' },
});