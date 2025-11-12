
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const testimonials = [
  {
    id: '1',
    quote: '“Akhirnya gak perlu ribet cari lawan sparring, semua di satu platform!”',
    author: 'Dimas',
    team: 'Kapten Tim Phoenix FC',
  },
  {
    id: '2',
    quote: '“Fitur booking lapangannya sangat membantu. Kami bisa langsung amankan jadwal main mingguan.”',
    author: 'Andi',
    team: 'Pemain Utama Garuda Jaya',
  },
  {
    id: '3',
    quote: '“Aplikasi yang keren! Tampilannya modern dan mudah digunakan, bahkan untuk orang awam sekalipun.”',
    author: 'Rina',
    team: 'Manajer Tim Bintang Timur',
  },
  {
    id: '4',
    quote: '“Aplikasi yang keren! Tampilannya modern dan mudah digunakan, bahkan untuk orang awam sekalipun.”',
    author: 'Rina',
    team: 'Manajer Tim Bintang Timur',
  },
  {
    id: '5',
    quote: '“Aplikasi yang keren! Tampilannya modern dan mudah digunakan, bahkan untuk orang awam sekalipun.”',
    author: 'Rina',
    team: 'Manajer Tim Bintang Timur',
  },
  {
    id: '6',
    quote: '“Aplikasi yang keren! Tampilannya modern dan mudah digunakan, bahkan untuk orang awam sekalipun.”',
    author: 'Rina',
    team: 'Manajer Tim Bintang Timur',
  },
];

interface TestimonialCardProps {
  quote: string;
  author: string;
  team: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, team }) => (
  <View style={styles.card}>
    <Text style={styles.quoteText}>{quote}</Text>
    <Text style={styles.authorText}>— {author}, {team}</Text>
  </View>
);

const TestimonialsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>APA KATA MEREKA?</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {testimonials.map(item => (
          <TestimonialCard
            key={item.id}
            quote={item.quote}
            author={item.author}
            team={item.team}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Bebas Neue',
    color: '#333',
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Added padding to see shadow properly
  },
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 25,
    marginRight: 15,
    width: 300,
    elevation: 6, // Adjusted for Android
    shadowColor: '#6A1B9A', // Changed to purple
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, // Adjusted for visibility
    shadowRadius: 5.84, // Adjusted for a softer glow
    justifyContent: 'space-between',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
    marginBottom: 20,
  },
  authorText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#6A1B9A', // Changed to purple
  },
});

export default TestimonialsSection;
