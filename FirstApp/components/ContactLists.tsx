import { ScrollView, Image , StyleSheet, Text, View } from 'react-native'
import React from 'react'

const contacts = [
    {
        id: 1,
        name: "John Doe",
        phone: "123-456-7890",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        phone: "234-567-8901",
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Emily Davis",
        phone: "345-678-9012",
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "Michael Brown",
        phone: "456-789-0123",
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        id: 5,
        name: "Sarah Wilson",
        phone: "567-890-1234",
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        id: 6,
        name: "David Johnson",
        phone: "678-901-2345",
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        id: 7,
        name: "Laura Martinez",
        phone: "789-012-3456",
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        id: 8,
        name: "James Taylor",
        phone: "890-123-4567",
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
        id: 9,
        name: "Olivia Anderson",
        phone: "901-234-5678",
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
        id: 10,
        name: "Daniel Thomas",
        phone: "012-345-6789",
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    },
];

export default function ContactLists() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headingText}>ContactLists</Text>
            <ScrollView style={styles.scrollContainer}>
                {contacts.map((contact) => (
                    <View key={contact.id} style={styles.card}>
                        <Image
                            source={{ uri: contact.profileImage }}
                            style={styles.cardImage}
                        />
                        <Text>{contact.name}</Text>
                        <Text>{contact.phone}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    scrollContainer: {
        flex: 1,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 8,
    },
});