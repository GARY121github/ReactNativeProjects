import { StyleSheet, View, Pressable, FlatList } from 'react-native';
import React from 'react';
import ProductItem from '../components/ProductItem';

// Navigation
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabPramList } from '../App';

import { PRODUCTS_LIST } from '../data/constants';

type Page1Props = BottomTabScreenProps<RootTabPramList, 'Page1'>;

export default function Page1({ navigation }: Page1Props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={product => product.id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate('Page2', {
                            product: item
                        })}
                    >
                        <ProductItem key={item.id} product={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: 'white',
        padding: 10,
        gap: 5
    }
})