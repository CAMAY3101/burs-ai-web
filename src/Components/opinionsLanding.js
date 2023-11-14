import React from 'react'

import { Carousel, RadioGroup, Radio, Space, Typography } from '@douyinfe/semi-ui';

function opinionsLanding() {

    const { Title, Paragraph } = Typography;

    const style = {
        width: '100%',
        height: '400px',
    };

    const titleStyle = {
        position: 'absolute',
        top: '100px',
        left: '100px',
        color: '#1C1F23'
    };

    const colorStyle = {
        color: '#1C1F23'
    };

    const renderLogo = () => {
        return (
            <img src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg' alt='semi_logo' style={{ width: 87, height: 31 }} />
        );
    };

    const imgList = [
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
    ];

    const textList = [
        ['Semi Design System Management', 'From Semi Design, To Any Design', 'Quickly define your design system and apply it to design drafts and code'],
        ['Semi Material', 'Customized components for business scenarios, support online preview and debugging', 'Content co-authored by Semi Design users'],
        ['Semi Template', 'Efficient Design2Code converts design into real code in seconds', 'One-click conversion of massive page template front-end code'],
    ];
    return (
        <div>
            <div className="flex flex-row justify-center items-center">
                <div className="w-1/4 bg-gray-200 p-6">
                    <h2 className="text-2xl font-bold">Opinions</h2>
                </div>
                <div className="w-3/4 bg-white p-6">
                    <div className="flex flex-wrap">
                        <Carousel style={style} theme='dark'>
                            {
                                imgList.map((src, index) => {
                                    return (
                                        <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url(${src})` }}>
                                            <Space vertical align='start' spacing='medium' style={titleStyle}>
                                                {renderLogo()}
                                                <Title heading={2} style={colorStyle}>{textList[index][0]}</Title>
                                                <Space vertical align='start'>
                                                    <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                                                    <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                                                </Space>
                                            </Space>
                                        </div>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default opinionsLanding
