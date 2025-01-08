import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = yup.object({
  passwordLength: yup
    .number()
    .min(4, "Password Must be atleast of 4 length")
    .max(10, "Password Must be atmost of 10 length")
})

export default function App() {
  const [password, setPassword] = useState<string>('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(false);
  const [containsNumber, setContainsNumber] = useState<boolean>(false);
  const [containsUppercaseAlphabet, setContainsUppercaseAlphabet] = useState<boolean>(false);
  const [containsLowercaseAlphabet, setContainsLowercaseAlphabet] = useState<boolean>(false);
  const [containsSpecialCharacters, setContainsSpecialCharacters] = useState<boolean>(false);

  const createPassword = (length: number): void => {
    const upperCaseAlphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseAlphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters: string = "`~!@#$%^&*()-_=+[{]}\\|;:'";

    let passwordChoice: string = '0123456789';

    if (containsUppercaseAlphabet) {
      passwordChoice += upperCaseAlphabet;
    }
    if (containsLowercaseAlphabet) {
      passwordChoice += lowerCaseAlphabet;
    }
    if (containsSpecialCharacters) {
      passwordChoice += specialCharacters;
    }

    let generatedPassword: string = '';

    for (let i = 1; i <= length; i++) {
      let index: number = Math.round(Math.random() * passwordChoice.length);

      generatedPassword += passwordChoice[index];
    }

    setPassword(generatedPassword);
    setIsPasswordGenerated(true);
  }

  const resetPassword = (): void => {
    setContainsNumber(false);
    setContainsLowercaseAlphabet(false);
    setContainsUppercaseAlphabet(false);
    setContainsSpecialCharacters(false);
    setIsPasswordGenerated(false);
  }


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.heading}>Password Generator</Text>
          <Formik
            initialValues={{
              passwordLength: ''
            }}
            validationSchema={passwordSchema}
            onSubmit={values => createPassword(Number(values.passwordLength))}
          >
            {({ handleChange, touched, handleSubmit, values, isValid, handleReset , errors }) => (
              <View style={styles.form}>
                <View>
                  <Text style={styles.formInputTitle}>Password Length : </Text>
                  {
                    touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )
                  }
                </View>
                <TextInput
                  style={styles.formTextInput}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='Enter the length of the password'
                  keyboardType='numeric'
                />
                <View style={styles.formSelect}>
                  <Text style={styles.formInputTitle}>Include UpperCase Alphabets</Text>
                  <BouncyCheckbox
                    size={25}
                    useBuiltInState={false}
                    isChecked={containsUppercaseAlphabet}
                    fillColor="red"
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    onPress={() => setContainsUppercaseAlphabet((prev) => !prev)}
                  />
                </View>
                <View style={styles.formSelect}>
                  <Text style={styles.formInputTitle}>Include LoweCase Alphabets</Text>
                  <BouncyCheckbox
                    size={25}
                    useBuiltInState={false}
                    isChecked={containsLowercaseAlphabet}
                    fillColor="red"
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    onPress={() => setContainsLowercaseAlphabet((prev) => !prev)}
                  />
                </View>
                <View style={styles.formSelect}>
                  <Text style={styles.formInputTitle}>Include Special Characters</Text>
                  <BouncyCheckbox
                    size={25}
                    useBuiltInState={false}
                    isChecked={containsSpecialCharacters}
                    fillColor="red"
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    onPress={() => setContainsSpecialCharacters((prev) => !prev)}
                  />
                </View>
                <View style={styles.formSubmitting}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                    style={[styles.formButton, styles.generatePasswordButton]}
                  >
                    <Text style={styles.fromButtonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                    style={[styles.formButton, styles.resetPasswordButton]}
                  >
                    <Text style={styles.fromButtonText}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <>
            {
              isPasswordGenerated && (
                <View style={styles.generatedPasswordCard}>
                  <Text style={styles.longHoldPasswordInstruction}>Long press to select password</Text>
                  <Text selectable={true} style={styles.generatedPasswordText}>
                  {password}
                  </Text>
                </View>
              )
            }
          </>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    marginBottom: 30,
    padding: 10,
    color: 'white',
    backgroundColor: '#30638E',
    borderRadius: 16
  },
  form: {
    padding: 3,
  },
  formInputTitle: {
    fontSize: 20,
    fontWeight: 'semibold'
  },
  formTextInput: {
    padding: 4,
  },
  formSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  formSubmitting: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  formButton: {
    fontSize: 50,
    padding: 10,
    borderRadius: 9
  },
  generatePasswordButton: {
    backgroundColor: '#30638E'
  },
  resetPasswordButton: {
    backgroundColor: 'black',
  },
  fromButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'semibold'
  },
  errorText: {
    fontSize: 10,
    color: '#D1495B'
  },
  generatedPasswordCard : {
    elevation : 1,
    padding : 3,
    backgroundColor : '#669bbc',
    width : 'auto',
    height : 100,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 50
  },
  generatedPasswordText : {
    fontSize : 30,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  longHoldPasswordInstruction : {
    fontSize : 15,
    fontWeight : 'semibold',
    textAlign : 'center',
    color : 'white',
    marginBottom : 5
  }
});