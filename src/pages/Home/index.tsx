import { Col, Row, Card, MenuProps, Menu } from 'antd';
import Banner from '../../assets/banner/Banner_BG.png';
import Logo from '../../assets/banner/Logo_Curso.svg';
import './scroll.css';
import { useState } from 'react';
import { Conteudo } from '../Conteudo/Conteudo';
import { items, rootSubmenuKeys } from '../Conteudo/MenuList';


const headerStyle: React.CSSProperties = {
    height: '25vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#686f99',
    backgroundImage: `url(${Banner})`
    // borderBottom: '4px dashed #404973',
};

const bodyStyle: React.CSSProperties = {
    padding: '2.5vh 16px',
    height: '70vh',
    color: '#fff',
    background: '#686f99',
    border: 'none',
};

const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    color: '#fff',
    background: '#686f99',
    borderTop: '4px dashed #404973',
};

export function Home() {
    const [content, setContent] = useState<string>('');

    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    function handleContent(e: string) {
        // console.log(e);
        setContent(e);
    }

    return (
        <div>
            <Row>
                <Col span={24} style={headerStyle}>
                    <div>
                        <center><img src={Logo} width='256rem' style={{}} /></center>
                    </div>
                </Col>
                    <Col xs={{ order: 2, span: 24 }} md={{ order: 1, span: 16 }} style={bodyStyle}>
                        <Card className='scrollStyled' style={{ height: '100%', overflowY: 'auto' }}>
                            <Conteudo codigo={content} />
                        </Card>
                    </Col>
                    <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 8 }} style={bodyStyle}>
                        <Menu
                            className='scrollStyled'
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            items={items}
                            style={{ height: '100%', borderRadius: '8px', overflowY: 'auto' }}
                            onClick={(e) => handleContent(e.key)}
                        />
                    </Col>
                <Col xs={{ order: 3 }} span={24} style={footerStyle}>
                    <div>JanDev | @GGCoffee | 2023</div>
                </Col>
            </Row>
        </div >
    )
}