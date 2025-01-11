import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from '../App'

import { PRODUCTS_LIST } from '../data/constants'
import ProductItem from '../components/ProductItem'

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={product => product.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.push('Details', {
              product: item
            })}
          >
            <ProductItem key={item.id} product={item}/>
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
    padding : 10,
    gap : 5
  }
})