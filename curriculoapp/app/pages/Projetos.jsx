import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.card}>
        <Text style={styles.projectTitle}>App de Currículo em React Native</Text>
        <Text style={styles.description}>
          Aplicativo mobile desenvolvido para apresentar meu perfil profissional, experiências, projetos e um mini-jogo interativo. Utiliza Expo Router para navegação e React Native para a interface.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.projectTitle}>Sistema de Controle de Tarefas</Text>
        <Text style={styles.description}>
          Plataforma web desenvolvida em Node.js para gerenciamento de tarefas, com autenticação, organização por categorias e interface responsiva.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.projectTitle}>Outros Projetos</Text>
        <Text style={styles.description}>
          Diversos projetos pessoais e acadêmicos utilizando React, Next.js, Java, Flutter, entre outras tecnologias. Sempre buscando desafios para aprimorar minhas habilidades em diferentes stacks.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.githubButton}
        onPress={() => Linking.openURL('https://github.com/emmanuelmeireles')}
      >
        <Text style={styles.githubButtonText}>Veja mais projetos no meu GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f5f6fa' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24, color: '#4F8EF7', textAlign: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  projectTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 4 },
  description: { fontSize: 15, color: '#333', marginTop: 2, lineHeight: 22 },
  githubButton: {
    backgroundColor: '#24292e',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 12,
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});