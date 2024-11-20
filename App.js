import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SectionList, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
    {data: [
            {name: 'Seasons', image: require('./img/seasons.jpg')},
            {name: 'Not Allowed', image: require('./img/notallowed.jpg')},
        ],
        title: "Indie", bgColour: '#7cdb92', tColour: '#67c47d'},
    {data: [
            {name: 'Ivy', image: require('./img/blonde.jpeg')},
            {name: 'After Hours', image: require('./img/starboy.png')},
        ],
        title: "R&B", bgColour: '#79b2e0', tColour: '#5b93bf'},
    {data: [
            {name: 'ISTJ', image: require('./img/istj.jpg')},
            {name: 'Hot Sauce', image: require('./img/hotsauce.jpg')},
        ], title: "Hiphop", bgColour: '#d28be7', tColour: '#9e5cb1'},
];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#fff',
        margin: 10,
        color: '#333',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        marginLeft: 10,
    },
    imageStyle: (isLarge) => ({
        width: isLarge ? 300 : 180, // Increase size when isLarge is true
        height: isLarge ? 300 : 180, // Same for height
        borderRadius: 5,
    }),
    sectionHeader: {
        padding: 10,
        backgroundColor: '#eee',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 5,
        textAlign: 'center',
    }
});

const App = () => {
    const [isImageLarge, setIsImageLarge] = useState(false); // State to track if image is large

    const handlePress = () => {
        setIsImageLarge(!isImageLarge); // Toggle the size of the image when clicked
    };

    return (
        <View style={{ flex: 1, marginBottom: 30, backgroundColor: '#f8f8f8' }}>
            <StatusBar hidden={true} />
            <SectionList
                sections={datasource}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.opacityStyle} onPress={handlePress}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                        <Image source={item.image} style={styles.imageStyle(isImageLarge)} />
                    </TouchableOpacity>
                )}
                renderSectionHeader={({section: {title, bgColour, tColour}}) => (
                    <Text style={[styles.sectionHeader, {backgroundColor: bgColour, color: tColour}]}>{title}</Text>
                )}
            />
        </View>
    );
};

export default App;


