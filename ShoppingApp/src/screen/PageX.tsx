import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import {
    DrawerItemList,
} from '@react-navigation/drawer';

// Navigation
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../App';

import { PRODUCTS_LIST } from '../data/constants';
import ProductItem from '../components/ProductItem';

type PageX = DrawerScreenProps<RootDrawerParamList, 'PageX'>

export default function PageX({ navigation }: PageX) {
    return (
        <FlatList
            data={PRODUCTS_LIST}
            keyExtractor={product => product.id}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate('PageY', {
                        product: item
                    })}
                >
                    <ProductItem key={item.id} product={item} />
                </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({})
