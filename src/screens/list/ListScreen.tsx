import React from 'react';
import {
    View,
    Text,
    ListRenderItem,
    FlatList,
    Image,
    TouchableHighlight,
    SectionList,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'
import cats from './../../mocks/cats';

export interface ChallengeProps {
    title: string;
    img: string;
    subTitle?: string;
}

export const StyledSubText = styled.Text`
	font-size: 14px;
`;

export const StyledTitle = styled.Text`
    font-size: 24px;
`;

export const StyledGroupTitle = styled.Text`
    font-size: 28px;
    margin-bottom: 4px;
    padding-bottom: 4px;
`;

const ListScreen = (props) => {
    const _onPress = (item) => {
        console.log('do some action');
        props.navigation.navigate('Details', {id: item.id})
    };
    return (
        <SectionList
            keyExtractor={(item, index) => item.id}
            renderSectionHeader={({section: {title}}) => (
                <StyledGroupTitle>{title}</StyledGroupTitle>
            )}
            sections={[
                {
                    title: 'Cats', data: cats,
                },
                {
                    title: 'Dogs', data: cats
                }
            ]}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity
                        onPress={() => _onPress(item)}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 10,
                                width: '100%'
                            }}>
                            <Image
                                style={
                                    {
                                        width: 120,
                                        height: 120,
                                    }
                                }
                                source={{uri: item.img}}
                            />
                            <View style={{
                                padding: 10
                            }}>

                                <StyledTitle>{item.title}</StyledTitle>
                                <StyledSubText>{item.subTitle}</StyledSubText>
                            </View>
                        </View>
                    </TouchableOpacity>

                );
            }}
        />
    );
};

export default ListScreen;