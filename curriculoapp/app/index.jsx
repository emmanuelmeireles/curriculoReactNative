import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Currículo</Text>
      <Link href="/Sobre" asChild>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Sobre</Text></TouchableOpacity>
      </Link>
      <Link href="/Experiencia-academica" asChild>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Experiência Acadêmica</Text></TouchableOpacity>
      </Link>
      <Link href="/Experiencia-profissional" asChild>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Experiência Profissional</Text></TouchableOpacity>
      </Link>
      <Link href="/Projetos" asChild>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Projetos</Text></TouchableOpacity>
      </Link>
      <Link href="/JogoSenha" asChild>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Jogo Senha</Text></TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#f5f6fa' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 32 },
  button: { backgroundColor: '#4F8EF7', padding: 18, borderRadius: 24, width: 250, alignItems: 'center', marginBottom: 8 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});