import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StyledSubText, StyledTitle } from "../list/ListScreen";
import cats from './../../mocks/cats';

const getCat = (id) => {
    return cats.find(c => c.id ===id);
}
const DetailsScreen = (props) => {
    const { navigation } = props;
    const catId = navigation.getParam('id', 'NO-ID');
    const cat = getCat(catId);
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
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
                    source={{uri: cat.img}}
                />
                <View style={{
                    padding: 10
                }}>

                    <StyledTitle>{cat.title}</StyledTitle>
                    <StyledSubText>{cat.subTitle}</StyledSubText>
                </View>
            </View>
            <Button
                title="Go back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
};

export default DetailsScreen;