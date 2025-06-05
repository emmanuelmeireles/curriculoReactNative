import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <View style={styles.card}>
        <Text style={styles.courseTitle}>Tecnólogo em Sistemas para Internet</Text>
        <Text style={styles.institution}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.period}>2023 - 2025</Text>
        <Text style={styles.description}>
          Formação focada em desenvolvimento web e mobile, com ênfase em tecnologias modernas e metodologias ágeis. 
          Durante o curso, aprofundei meus conhecimentos em React Native, JavaScript, TypeScript e bancos de dados, 
          além de participar de projetos práticos que simularam desafios reais do mercado.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.courseTitle}>Bacharelado em Arquitetura e Urbanismo (Incompleto)</Text>
        <Text style={styles.institution}>Estácio</Text>
        <Text style={styles.period}>2020</Text>
        <Text style={styles.description}>
          Iniciei minha trajetória acadêmica na Arquitetura, onde desenvolvi um olhar apurado para design, 
          criatividade e análise de projetos. Essa experiência contribuiu para minha sensibilidade estética e 
          atenção aos detalhes, características que levo para o desenvolvimento de interfaces digitais.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.courseTitle}>Cursos Complementares & Autodidatismo</Text>
        <Text style={styles.description}>
          - React Native, React, Next.js, Java, Angular, Flutter e Dart{'\n'}
          - HTML5, CSS3 (Sass, Styled Components, Responsive Web Design){'\n'}
          - Metodologias Ágeis: Scrum e Kanban{'\n'}
          - Controle de versão com Git e Github{'\n'}
          Sempre buscando atualização constante, participei de cursos online e bootcamps, 
          além de desenvolver projetos próprios para consolidar o aprendizado.
        </Text>
      </View>
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
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  institution: { fontSize: 16, color: '#555', marginBottom: 2 },
  period: { fontSize: 14, color: '#888', marginBottom: 8 },
  description: { fontSize: 15, color: '#333', marginTop: 4, lineHeight: 22 },
});