import Card from '@/components/Card';
import Divider from '@/components/Divider';

const AboutIt = () => {
  return (
    <Card>
      <h1 className='text-text-primary font-bold tablet:text-2xl'>
        Sobre o curso de Programador Front-End
      </h1>

      <Divider />

      <p className='mt-3 text-text-primary text-xs'>
        O Curso de Qualificação Profissional em Programador Front-End do SENAI
        Alagoas busca preparar os alunos para criar páginas web a partir da
        programação de sistemas que se utilizam de linguagens como HTML, CSS e
        JavaScript. O front-end de um site ou aplicativo é a parte que o usuário
        vê e com a qual interage diretamente a partir de seus navegadores. Ao
        término da formação, espera-se que os participantes tenham desenvolvido
        competências para criar interfaces gráficas com as tecnologias de base
        da web, disponibilizando visualmente, para o usuário, uma forma amigável
        de acesso ao sistema.
      </p>
    </Card>
  );
};

export default AboutIt;
