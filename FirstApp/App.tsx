import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ContactLists from './components/ContactLists';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ContactLists />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App