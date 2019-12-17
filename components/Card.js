import React, {useEffect, useState} from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import axios from 'axios';
import Card2 from './Card2';

export default function Card() {

    const [businessList, setBusinessList] = useState([]);

    useEffect( () => {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`,
            },
            params: {
                location: 'charlotte',
            },
        })
        .then(response => {
            setBusinessList(response.data.businesses[0]);
        })
        .catch(error => {
            console.log('DATA NOT RETURNED', error);
        });
    }, []);

    const [profileIndex, setProfileIndex] = useState(0);
    nextCard = () => {
        setProfileIndex(profileIndex + 1);
    }

    const restaurant = businessList;
    console.log(restaurant);

    {/* {businessList.map( (restaurant, index) => {
    return <Text key={index}>{restaurant.name}</Text>
    })} */}

    return (
        <View>
            <Card2 businessList={businessList} />
        </View>
    )
}

const { width, height } = Dimensions.get('window');

