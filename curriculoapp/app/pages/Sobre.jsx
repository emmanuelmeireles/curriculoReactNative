import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido para apresentar meu perfil profissional, experiências, projetos e um mini-jogo interativo, utilizando tecnologias modernas e práticas recomendadas de UI/UX.
        {'\n\n'}Módulos e tecnologias utilizados:
        {'\n'}- Expo Router (navegação entre telas)
        {'\n'}- React Native (desenvolvimento mobile)
        {'\n'}- React Native Paper (componentes visuais)
        {'\n'}- Styled Components (estilização)
        {'\n'}- TypeScript (tipagem estática)
        {'\n'}- JavaScript ES6+
        {'\n'}- React Navigation (alternativa de navegação)
        {'\n'}- Axios (requisições HTTP)
        {'\n'}- Context API (gerenciamento de estado)
        {'\n'}- AsyncStorage (armazenamento local)
        {'\n'}- ESLint & Prettier (padronização de código)
        {'\n'}- Git & GitHub (controle de versão)
        {'\n'}- Tailwind CSS (para projetos web)
        {'\n'}- MySQL/PostgreSQL (banco de dados em projetos fullstack)
        {'\n'}- Flutter e Dart (em projetos anteriores)
        {'\n'}- Metodologias Ágeis: Scrum e Kanban
        {'\n\n'}O app foi pensado para ser responsivo, acessível e de fácil manutenção, sempre buscando as melhores práticas do ecossistema React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, lineHeight: 24 },
});