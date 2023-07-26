import { Image, Typography, Empty } from 'antd';
import GGCoffeeLogo from '../../assets/others/GGCoffe - Logo_spining.gif';
import './styles.css';

const { Paragraph, Text, Title } = Typography;

type ConteudoProps = {
    codigo: string;
}

export function Conteudo(conteudoProps?: ConteudoProps) {
    switch (conteudoProps?.codigo) {
        case '1-1':
            return (
                aula.moduloA
            )
        case '1-2':
            return (
                aula.moduloB
            )
        default:
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh'}}>
                    <Empty description={'Em construção!'} />
                </div>
            )
    }
}

const aula = {
    moduloA:
        <>
            <Typography>
                <Title level={2} style={{ textAlign: 'center' }}>Bem-vindos ao <span className='specialText'>Curso PixelZ Express</span></Title>
                <Paragraph>
                    Bem-vindos ao Curso de Pixel Art! Nesta jornada criativa, vamos explorar a arte dos pixels e sua importância nos jogos. Ao longo do curso, vocês aprenderão os conceitos fundamentais do Pixel Art, as técnicas essenciais para criar personagens, cenários e animações incríveis, além de como preparar sua arte para uso em jogos. Vamos mergulhar nesse universo encantador e expressar nossa criatividade de forma única!
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Introdução e Visão Geral</Title>
                <Paragraph>
                    - O que é Pixel Art e por que é tão relevante nos jogos.<br />
                    - Objetivos do curso: desenvolver habilidades de Pixel Art, estimular a criatividade e construir uma base sólida para a criação de arte em jogos.<br />
                    - A importância do Pixel Art na indústria dos games: evocar nostalgia, estética atemporal e a popularidade no cenário indie.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Conceitos Básicos de Pixel Art</Title>
                <Paragraph>
                    - Entendendo a essência do Pixel Art: como criar imagens usando pixels individuais.<br />
                    - Resolução e pixelarização: definindo o tamanho e a nitidez da arte.<br />
                    - A magia das paletas de cores: como escolher as cores certas para dar vida à sua arte.<br />
                    - O poder das referências e inspirações: aprimorando sua técnica através de estudos.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Ferramentas e Software</Title>
                <Paragraph>
                    - Apresentação do Aseprite e suas principais funcionalidades.<br />
                    - Outras ferramentas e recursos úteis para Pixel Art.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Técnicas Fundamentais</Title>
                <Paragraph>
                    - Uso de linhas, formas e sombras: criando objetos e personagens com detalhes impressionantes.<br />
                    - Dithering e anti-aliasing: aperfeiçoando sua arte através de técnicas de suavização.<br />
                    - Pixel Art isométrico (se relevante): construindo cenários tridimensionais em perspectiva isométrica.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Animação de Frame a Frame</Title>
                <Paragraph>
                    - Conceitos básicos de animação em Pixel Art.<br />
                    - Criação de sprites animados para personagens e objetos em jogos.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Pixel Art para Cenários e Ambientes</Title>
                <Paragraph>
                    - Criação de tiles e backgrounds para jogos 2D.<br />
                    - Dicas para construir ambientes coesos e visualmente atraentes.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Animação Avançada</Title>
                <Paragraph>
                    - Técnicas avançadas de animação para dar vida aos personagens e objetos.<br />
                    - Adicionando efeitos especiais em Pixel Art para tornar seus jogos mais envolventes.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Pixel Art para UI (User Interface)</Title>
                <Paragraph>
                    - Criação de elementos de interface do usuário em Pixel Art, como botões e ícones.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Preparando sua Arte para Jogos</Title>
                <Paragraph>
                    - Exportação e otimização de sprites e tiles para uso em jogos.<br />
                    - Lidando com diferentes resoluções e proporções de tela.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Projetos Práticos</Title>
                <Paragraph>
                    - Desafios e projetos para aplicar o conhecimento adquirido ao longo do curso.<br />
                    - Análise e feedback dos trabalhos dos alunos para promover o aprendizado contínuo.<br />
                </Paragraph>

                <Title level={3} style={{ textAlign: 'center' }}>Dicas de Carreira e Networking</Title>
                <Paragraph>
                    - Sugestões para encontrar oportunidades na indústria de jogos com habilidades de Pixel Art.<br />
                    - A importância de construir uma rede de contatos na indústria para expandir suas oportunidades profissionais.<br />
                </Paragraph>
            </Typography>

            {/* <Typography>
                <h3 style={{ textAlign: 'center' }}>Bem-vindos ao <span className='specialText'>Curso PixelZ Express</span></h3>
                <Paragraph>
                    Nesta jornada criativa, vamos explorar a arte dos pixels e sua importância nos jogos. Ao longo do curso, vocês aprenderão os conceitos fundamentais do Pixel Art, as técnicas essenciais para criar personagens, cenários e animações incríveis, além de como preparar sua arte para uso em jogos. Vamos mergulhar nesse universo encantador e expressar nossa criatividade de forma única!
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Introdução e Visão Geral</h5>
                <Paragraph>
                    O que é Pixel Art e por que é tão relevante nos jogos.
                    Objetivos do curso: desenvolver habilidades de Pixel Art, estimular a criatividade e construir uma base sólida para a criação de arte em jogos.
                    A importância do Pixel Art na indústria dos games: evocar nostalgia, estética atemporal e a popularidade no cenário indie.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo} preview={false}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Conceitos Básicos de Pixel Art</h5>
                <Paragraph>
                    Entendendo a essência do Pixel Art: como criar imagens usando pixels individuais.
                    Resolução e pixelarização: definindo o tamanho e a nitidez da arte.
                    A magia das paletas de cores: como escolher as cores certas para dar vida à sua arte.
                    O poder das referências e inspirações: aprimorando sua técnica através de estudos.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Ferramentas e Software</h5>
                <Paragraph>
                    Apresentação do Aseprite: uma ferramenta poderosa para criação de Pixel Art e animações.
                    Explorando outras ferramentas úteis: recursos adicionais para aprimorar sua arte.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Técnicas Fundamentais</h5>
                <Paragraph>
                    Uso de linhas, formas e sombras: criando objetos e personagens com detalhes impressionantes.
                    Dithering e anti-aliasing: aperfeiçoando sua arte através de técnicas de suavização.
                    Pixel Art isométrico (se relevante): construindo cenários tridimensionais em perspectiva isométrica.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Animação de Frame a Frame</h5>
                <Paragraph>
                    Introdução aos conceitos básicos de animação em Pixel Art.
                    Criando sprites animados para personagens e objetos em jogos.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Pixel Art para Cenários e Ambientes</h5>
                <Paragraph>
                    Criação de tiles e backgrounds para jogos 2D.
                    Dicas para construir ambientes coesos e visualmente atraentes.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Animação Avançada</h5>
                <Paragraph>
                    Técnicas avançadas de animação para dar vida aos personagens e objetos.
                    Adicionando efeitos especiais em Pixel Art para tornar seus jogos mais envolventes.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Pixel Art para UI (User Interface:</h5>
                <Paragraph>
                    Criando elementos de interface do usuário em Pixel Art, como botões e ícones.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Preparando sua Arte para Jogos</h5>
                <Paragraph>
                    Exportação e otimização de sprites e tiles para uso em jogos.
                    Lidando com diferentes resoluções e proporções de tela.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Projetos Práticos</h5>
                <Paragraph>
                    Desafios e projetos para aplicar o conhecimento adquirido ao longo do curso.
                    Análise e feedback dos trabalhos dos alunos para promover o aprendizado contínuo.
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
                <h5 style={{ textAlign: 'center' }}>Dicas de Carreira e Networking</h5>
                <Paragraph>
                    Sugestões para encontrar oportunidades na indústria de jogos com habilidades de Pixel Art.
                    A importância de construir uma rede de contatos na indústria para expandir suas oportunidades profissionais.
                    Vamos embarcar nessa jornada artística e aprender a criar mundos fascinantes através do poder dos pixels. Ao final do curso, vocês estarão aptos a desenvolver arte espetacular para jogos, além de entender a relevância contínua do Pixel Art na indústria de games. Vamos começar a criar, inovar e inspirar!
                    <p style={{ textAlign: 'center' }}><Image style={{width: 'auto'}} src={GGCoffeeLogo}/></p>
                </Paragraph>
            </Typography> */}
        </>,
    moduloB:
        <>
            <Typography>
                <h3 style={{ textAlign: 'center' }}>A importância do Pixel Art nos Games</h3>
                <Paragraph>
                    O <Text strong>Pixel Art</Text>, uma forma de arte digital que utiliza pixels individuais para criar imagens, teve seu auge na era dos videogames 8 e 16 bits, mas sua relevância perdura até os dias de hoje. Embora a tecnologia tenha avançado consideravelmente desde o surgimento dos primeiros jogos, o <Text strong>Pixel Art</Text> continua a ser uma escolha proeminente para muitos desenvolvedores de jogos contemporâneos. Através de sua estética única e encantadora, ele desempenha um papel fundamental no cenário dos games e é reverenciado por fãs e criadores de todo o mundo.
                </Paragraph>
                <Paragraph>
                    <div style={{ textAlign: 'center' }}><Image style={{ width: 64 }} src={GGCoffeeLogo} /></div>
                </Paragraph>
                <Paragraph>
                    Um dos motivos pelos quais o <Text strong>Pixel Art</Text> permanece tão relevante é sua capacidade de evocar nostalgia. Muitos jogadores cresceram com consoles de jogos clássicos, como o <Text type="success">NES</Text>, <Text type="success">SNES</Text> e o <Text type="success">Sega Genesis</Text>, nos quais o <Text strong>Pixel Art</Text> era a principal forma de representação visual. Ao usar essa estética no desenvolvimento de novos jogos, os desenvolvedores conseguem apelar para a memória afetiva dos jogadores, despertando sentimentos de carinho e saudade pela era dourada dos videogames.
                </Paragraph>
                <Paragraph>
                    Além disso, o <Text strong>Pixel Art</Text> permite uma maior liberdade criativa e expressiva. Embora possa parecer limitado pelo tamanho e resolução dos pixels, os artistas do <Text strong>Pixel Art</Text> conseguem criar maravilhas visuais através de restrições deliberadas. A habilidade de contar uma história emocionante, representar personagens cativantes e construir mundos envolventes com recursos limitados demonstra o talento excepcional dos artistas que trabalham nessa técnica.
                </Paragraph>
                <Paragraph>
                    Outra vantagem significativa do <Text strong>Pixel Art</Text> é a sua acessibilidade e leveza em termos de recursos de hardware. Jogos que utilizam <Text strong>Pixel Art</Text> tendem a ter um tamanho de arquivo menor e exigir menos poder de processamento do que os gráficos em 3D ultra-realistas. Isso possibilita que uma ampla variedade de jogadores com diferentes configurações de hardware possam apreciar os jogos, inclusive aqueles com dispositivos mais modestos.
                </Paragraph>
                <Paragraph>
                    Além disso, o <Text strong>Pixel Art</Text> possui um charme estético único que, muitas vezes, não é alcançado com outras técnicas de arte digital. Os gráficos em pixels oferecem um estilo "retro" atemporal que ressoa com os jogadores e continua a atrair novas audiências. Essa simplicidade visual pode ser muito apelativa, pois destaca a jogabilidade e a narrativa, em vez de sobrecarregar o jogador com gráficos complexos.
                </Paragraph>
                <Paragraph>
                    Um exemplo notável do impacto duradouro do <Text strong>Pixel Art</Text> é o gênero dos jogos indie. Muitos desenvolvedores independentes escolhem o <Text strong>Pixel Art</Text> como sua principal forma de arte, devido à sua viabilidade técnica e ao estilo distintivo que possibilita. Inúmeros jogos indie bem-sucedidos, como "<Text type="success">Stardew Valley</Text>", "<Text type="success">Celeste</Text>" e "<Text type="success">Undertale</Text>", alcançaram grande reconhecimento por seu uso magistral do <Text strong>Pixel Art</Text>, provando que esse estilo pode ser tão emocionante e envolvente quanto os jogos de grande orçamento.
                </Paragraph>
                <Paragraph>
                    Em resumo, a importância do <Text strong>Pixel Art</Text> nos jogos é indiscutível. Sua capacidade de evocar nostalgia, oferecer liberdade criativa, acessibilidade e um charme estético atemporal fazem com que ele seja uma escolha valiosa para os desenvolvedores e apreciadores de jogos. Enquanto a indústria de videogames continua a evoluir, o <Text strong>Pixel Art</Text> permanecerá como uma forma de arte amada, contribuindo para a rica diversidade de experiências que os jogos oferecem aos jogadores em todo o mundo.
                </Paragraph>
            </Typography>
        </>
}