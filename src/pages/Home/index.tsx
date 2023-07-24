import { Col, Row, Card, MenuProps, Menu } from 'antd';
import Banner from '../../assets/banner/Banner_Curso-PixelZ-1280.png'
import './scroll.css'
import { useState } from 'react';
import { Conteudo } from '../Conteudo/Conteudo';
import { items, rootSubmenuKeys } from '../Conteudo/MenuList';


const headerStyle: React.CSSProperties = {
    height: '25vh',
    display: 'flex',
    justifyContent: 'center',
    background: '#686f99',
    borderBottom: '4px dashed #404973',
};

const bodyStyle: React.CSSProperties = {
    padding: '2.5vh 0 2.5vh 16px',
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

const CardStyle: React.CSSProperties = {
    padding: '2.5vh 16px ',
    border: 'none',
    background: '#686f99',
}

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
        <div style={{ width: '80 rem' }}>
            <Row>
                <Col span={24} style={headerStyle}>
                    <div>
                        <img src={Banner} height={'100%'} />
                    </div>
                </Col>
                <Col span={16} style={bodyStyle}>
                    <Card className='scrollStyled' style={{ height: '100%', overflowY: 'auto' }}>
                        <Conteudo codigo={content} />
                    </Card>
                </Col>
                <Col span={8} style={CardStyle}>
                    <Menu
                        className='scrollStyled'
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        items={items}
                        style={{ width: 'auto', height: '65vh', borderRadius: '8px', overflowY: 'auto' }}
                        onClick={(e)=>handleContent(e.key)}
                    />
                </Col>
                <Col span={24} style={footerStyle}>
                    <div>JanDev | @GGCoffee | 2023</div>
                </Col>
            </Row>
        </div >
    )
}