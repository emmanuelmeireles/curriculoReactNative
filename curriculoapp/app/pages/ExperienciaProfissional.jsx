import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.role}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.company}>Residência de Software — Porto Digital e CLARO</Text>
        <Text style={styles.period}>Março de 2025 - Atualmente</Text>
        <Text style={styles.description}>
          Atuo no desenvolvimento de soluções mobile utilizando React Native, com adaptação para aplicações web. 
          Trabalho com bancos de dados relacionais, SQL e integração de tecnologias como Java, React, Tailwind CSS e PostgreSQL. 
          Participo de projetos colaborativos, aplicando metodologias ágeis e boas práticas de versionamento com Git.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.company}>Residência de Software — Porto Digital e Accenture</Text>
        <Text style={styles.period}>Janeiro de 2024 - Junho de 2024</Text>
        <Text style={styles.description}>
          Desenvolvi soluções mobile com Flutter, adaptando para web e utilizando bancos de dados MySQL. 
          Atuei em projetos que exigiram integração entre diferentes stacks, como Java, React e Tailwind CSS, 
          sempre focando em entregar produtos robustos e eficientes.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Estagiário de Projetos</Text>
        <Text style={styles.company}>ADEPE – Agência de Desenvolvimento Econômico de Pernambuco</Text>
        <Text style={styles.period}>Janeiro de 2024 - Junho de 2024</Text>
        <Text style={styles.description}>
          Auxiliei na avaliação de projetos e levantamentos utilizando AutoCAD/Archicad, 
          desenvolvendo habilidades em análise e estruturação de dados para apoiar decisões estratégicas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Estagiário de Projetos</Text>
        <Text style={styles.company}>Tony Pedrosa Designer de Interiores</Text>
        <Text style={styles.period}>Fevereiro de 2022 - Abril de 2023</Text>
        <Text style={styles.description}>
          Realizei levantamentos residenciais e comerciais com AutoCAD e SketchUp, 
          colaborando em projetos que exigiam análise técnica, criatividade e foco em resultados precisos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Auxiliar de Suporte Técnico</Text>
        <Text style={styles.company}>Empresa</Text>
        <Text style={styles.period}>Fevereiro de 2018 - Fevereiro de 2022</Text>
        <Text style={styles.description}>
          Auxiliei gerentes em scripts de servidores em Python, atualizações e testes de firmwares de roteadores, 
          além de prestar suporte remoto para resolução de problemas técnicos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Serviço Voluntário</Text>
        <Text style={styles.company}>ABIJCSUD</Text>
        <Text style={styles.period}>Fevereiro de 2015 - Abril de 2017</Text>
        <Text style={styles.description}>
          Treinei e orientei equipes em reuniões com até 24 representantes voluntários, 
          atuando como Voluntário Júnior, Sênior, Treinador, Líder Distrital, Regional e Assistente de Presidente. 
          Desenvolvi habilidades de liderança, organização e trabalho em equipe em ambiente não governamental.
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
  role: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  company: { fontSize: 16, color: '#555', marginBottom: 2 },
  period: { fontSize: 14, color: '#888', marginBottom: 8 },
  description: { fontSize: 15, color: '#333', marginTop: 4, lineHeight: 22 },
});