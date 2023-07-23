import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    link: React.ReactNode,
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        link,
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to='' />, '1 - Introdução e Visão Geral', 'sub1', '', [
        getItem(<Link to='/1-1' />, 'Apresentação do curso', '1'),
        getItem(<Link to='1-2' />, 'A importância do Pixel Art nos Games', '2'),
    ]),
    getItem(<Link to='' />, '2 - Conceitos Básicos de Pixel Art', 'sub2', '', [
        getItem(<Link to='' />, 'O que é Pixel Art e sua relevância nos Games', '5'),
        getItem(<Link to='' />, 'Resolução e pixelarização', '6'),
        getItem(<Link to='' />, 'Paletas de cores e sua importância', '7'),
        getItem(<Link to='' />, 'Uso de referências e inspirações', '8'),
        getItem(<Link to='' />, 'Material de Apoio', 'sub3', null, [getItem(<Link to='' />, 'Aseprite', '9'), getItem(<Link to='' />, 'Outras Ferramentas', '10')]),
    ]),
    getItem(<Link to='' />, '3 - Ferramentas e Software', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '4 - Técnicas Fundamentais', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '5 - Animação de Frame a Frame', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '6 - Pixel Art para Cenários e Ambientes', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '7 - Animação Avançada', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '8 - Pixel Art para UI (User Interface)', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '9 - Preparando sua Arte para Jogos', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '10 - Projetos Práticos', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
    getItem(<Link to='' />, '11 - Dicas de Carreira e Networking', 'sub4', '', [
        getItem(<Link to='' />, 'Option 9', '11'),
        getItem(<Link to='' />, 'Option 10', '12'),
        getItem(<Link to='' />, 'Option 11', '13'),
        getItem(<Link to='' />, 'Option 12', '14'),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export function MenuList(props: MenuProps) {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    // const onClick: MenuProps['onClick'] = (item) => {
    //     const current = item.key;
    //     // console.log(current);
    //     // return (<Link to={`/${current}`} />)
    //     return current;
    // }

    return (
        <Menu
            className='scrollStyled'
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            style={props.style}
        />
    );
}