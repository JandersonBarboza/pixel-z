import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        codigo: key,
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const items: MenuItem[] = [
    getItem('1 - Introdução e Visão Geral', 'sub1', '', [
        getItem('Apresentação do curso', '1-1'),
        getItem('A importância do Pixel Art nos Games', '1-2'),
    ]),
    getItem('2 - Conceitos Básicos de Pixel Art', 'sub2', '', [
        getItem('O que é Pixel Art e sua relevância nos Games', '2-1'),
        getItem('Resolução e pixelarização', '2-2'),
        getItem('Paletas de cores e sua importância', '2-3'),
        getItem('Uso de referências e inspirações', '2-4'),
    ]),
    getItem('3 - Ferramentas e Software', 'sub3', '', [
        getItem('Apresentação do Aseprite e suas principais funcionalidades', '3-1'),
        getItem('Outras ferramentas e recursos úteis para Pixel Art', '3-2'),
        getItem('Material de Apoio', 'sub3-3', null, [getItem('Aseprite', 'sub3-3-1'), getItem('Outras Ferramentas', 'sub3-3-2')]),
    ]),
    getItem('4 - Técnicas Fundamentais', 'sub4', '', [
        getItem('Uso de linhas, formas e sombras para criar objetos e personagens', '4-1'),
        getItem('Dithering e anti-aliasing para aprimorar os detalhes', '4-2'),
        getItem('Pixel Art isométrico', '4-3'),
    ]),
    getItem('5 - Animação de Frame a Frame', 'sub5', '', [
        getItem('Conceitos básicos de animação', '5-1'),
        getItem('Criação de sprites animados para personagens e objetos em jogos', '5-2'),
    ]),
    getItem('6 - Pixel Art para Cenários e Ambientes', 'sub6', '', [
        getItem('Criação de tiles e backgrounds para jogos 2D', '6-1'),
        getItem('Dicas para criar ambientes coesos e visualmente atraentes', '6-2'),
    ]),
    getItem('7 - Animação Avançada', 'sub7', '', [
        getItem('Técnicas avançadas de animação para dar vida aos personagens e objetos', '7-1'),
        getItem('Efeitos especiais em Pixel Art','7-2'),
    ]),
    getItem('8 - Pixel Art para UI (User Interface)', 'sub8', '', [
        getItem('Criação de elementos de interface do usuário em Pixel Art', '8-1'),
    ]),
    getItem('9 - Preparando sua Arte para Jogos', 'sub9', '', [
        getItem('Exportação e otimização de sprites e tiles para uso em jogos', '9-1'),
        getItem('Dicas para lidar com diferentes resoluções e proporções', '9-2'),
    ]),
    getItem('10 - Projetos Práticos', 'sub10', '', [
        getItem('Desafios e projetos', '10-1'),
        getItem('Análise e feedback', '10-2'),
        getItem('Como encontrar oportunidades no desenvolvimento de jogos com suas habilidades de Pixel Art', '10-3'),
    ]),
    getItem('11 - Dicas de Carreira e Networking', 'sub11', '', [
        getItem('Encontrando oportunidades no desenvolvimento de jogos', '11-1'),
        getItem('Importância de construir uma rede de contatos na indústria', '11-2'),
    ]),
    getItem('Bônus - Pixel Art com Unity', 'sub12', '', [
        getItem('Importar e Configurar spritesheets com Unity', '12-1'),
        getItem('Aplicando sprites animados com Unity', '12-2'),
        getItem('Trabalhando com Tileset com Unity', '12-3'),
    ]),
];

// submenu keys of first level
export const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11'];