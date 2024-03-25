import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ArrowRight from '@/assets/arrow-right-bold.png';

console.log(ArrowRight);
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  sectionGrow: {
    margin: 10,
    padding: 10,
    flexGrow: 4,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#343434',
    maxHeight: '10vh',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  delim: {
    borderBottomWidth: 1,
    borderColor: '#343434',
  }
});

// Create Document Component
export const Invoice= (props: {
  date: Date,
  total: number,
  sender: {
    name: string;
    position: string;
    address: string;
  },
  to: {
    name: string;
    position: string;
    address: string;
  },
}) => {
  const { date, total, sender, to } = props;

  return (<Document>
    <Page size="A4" style={styles.page}>
      {/* Logo section */}
      <View style={styles.section}>
        <Text>&lt;INSERT LOGO HERE&gt;</Text>
      </View>
      {/* Contact Section */}
      <View style={[styles.section, styles.row, styles.justifyBetween]}>
        <View>
          <Text>{sender.name}</Text>
          <Text>{sender.position}</Text>
          <Text>{sender.address}</Text>
        </View>
        <View>
          <Image source={ArrowRight} style={{ width: 48, height: 48 }} />
        </View>
        <View>
          <Text>{to.name}</Text>
          <Text>{to.position}</Text>
          <Text>{to.address}</Text>
        </View>
      </View>
      {/* Details */}
      <View style={[styles.section, styles.row, styles.justifyBetween]}>
        <View>
          <Text>Invoice #000</Text>
          <Text>MARCH 25, 2024</Text>
        </View>
        <View>
          <Text>Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </View>
      </View>
      {/* Line Items */}
      <View style={styles.sectionGrow}>
        <View style={[styles.row, styles.justifyBetween, styles.delim]}>
          <Text>Item Description</Text>
          <Text>Rate</Text>
          <Text>Hours</Text>
          <Text>Line Total</Text>
        </View>
      </View>
      {/* Footer */}
      <View style={[styles.section, styles.footer]}>
        <View>
          <Text>company.com</Text>
          <View>
            <Text>
              John Doe
            </Text>
            <Text>
              doe.john@company.com
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>);
};