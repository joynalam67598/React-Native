import React,{useState} from "react";
import { View, Text, Button,FlatList,TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of fresh year', rating: 5, body:'loream' , key:1},
        {title: 'Breath of fresh year', rating: 4, body:'fresh year' , key:2},
        {title: 'Breath of fresh ', rating: 3, body:'Breath of  year' , key:3}
       
    ])
    
    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ReviewDetails', item)
                        }>
                        <Text>{ item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
