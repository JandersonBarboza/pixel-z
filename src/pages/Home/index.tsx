import { Button, Menu, MenuProps } from 'antd';
import Logo from '../../assets/banner/Logo_Curso.svg';
import './scroll.css';
// import './style.css'
import { useState } from 'react';
import { Conteudo } from '../Conteudo/Conteudo';
import { items, rootSubmenuKeys } from '../Conteudo/MenuList';
import { StyledBody, StyledContent, StyledFooter, StyledHeader, StyledMenu, StyledPage, StyledPopup } from './Home.style';
import { Popup, NavBar } from 'antd-mobile';
import { MenuOutlined } from '@ant-design/icons';

export function Home() {
    const [content, setContent] = useState<string>('');
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [menuVisible, setMenuVisible] = useState(false)

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    function handleContent(e: string) {
        setContent(e);
    }
    function handleMenuContent(e: string) {
        setContent(e);
        setMenuVisible(false)
    }

    return (
        <StyledPage>
            
            <StyledHeader>
                <div>
                    <center><img src={Logo} width='256rem' /></center>
                </div>
            </StyledHeader>
            <StyledBody>
            <StyledPopup>
                <Button
                    style={{
                        // position: 'absolute',
                        // top: '16px',
                        // left: '16px',
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                    icon={<MenuOutlined style={{color: 'white', fontSize: 24}} />}
                    onClick={() => {
                        setMenuVisible(true)
                    }}
                />
                <Popup
                    visible={menuVisible}
                    onMaskClick={() => {
                        setMenuVisible(false)
                    }}
                    position='left'
                    bodyStyle={{ width: '100vw' }}
                >
                    <NavBar onBack={() => setMenuVisible(false)} />
                    <Menu
                        style={{ border: 'none' }}
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        items={items}
                        onClick={(e) => handleMenuContent(e.key)}
                    />
                </Popup>
            </StyledPopup>
                <StyledContent className='styledScroll'>
                    <Conteudo codigo={content} />
                </StyledContent>
                <StyledMenu className='styledScroll'>
                    <Menu
                        style={{ border: 'none' }}
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        items={items}
                        onClick={(e) => handleContent(e.key)}
                    />
                </StyledMenu>
            </StyledBody>
            <StyledFooter className='styledFooter'>
                <div>JanDev | @GGCoffee | 2023</div>
            </StyledFooter>
        </StyledPage>
    )
}