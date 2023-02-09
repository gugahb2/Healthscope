// @ts-nocheck
import React from 'react'
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js'
import Html from 'react-pdf-html'
import { ProfileDetailProps } from './ProfileDetailsPanel'
import { formatAddress, formatPhoneNumber, isValidPhoneNumber, setTitleCase } from '../../scripts/utils'

const PDFDocument = (props: ProfileDetailProps) => {
  const { expertise, interest, profileCard, introText, hospitals } = props
  const hideEmail = profileCard?.hideEmail
  const hidePhone = profileCard?.hidePhone
  const hideFax = profileCard?.hideFax
  const site = profileCard?.site
  const names = [];
  if (profileCard?.title) names.push(profileCard.title);
  if (profileCard?.firstName) names.push(profileCard.firstName);
  if (profileCard?.lastName) names.push(profileCard.lastName);
  const fullName = names.length > 0 ? names.join(' ') : '';
  const displayName = profileCard.name || fullName;
  let avatarUrl = profileCard?.avatar?.src

  if (avatarUrl) {
    avatarUrl = avatarUrl.split("?")[0] + "?time=" + new Date().getTime()
  } else {
    avatarUrl = '/images/default_avatar.jpg'
  }

  const contactDetails = profileCard?.contactDetails || []

  let infoList = []
  const temp = contactDetails.map((item) => {
    const info = {
      phone: hidePhone
        ? null
        : isValidPhoneNumber(item.alternatePhone, 'alt')
          ? formatPhoneNumber(item.alternatePhone)
          : isValidPhoneNumber(item.phone, 'no-alt') ? formatPhoneNumber(item.phone) : null,
      fax: !hideFax && isValidPhoneNumber(item.fax, 'no-alt') ? formatPhoneNumber(item.fax) : null,
      email: !hideEmail && item.email && item.email !== ' ' ? item.email : null,
      hospital: item.hospitalName,
      address: formatAddress(item?.consultingAddress) || formatAddress(item?.address)
    }
    const index = infoList.findIndex(x =>
      x.phone === info.phone
      && x.fax === info.fax
      && x.email === info.email
      && x.address === info.address
    )
    
    if (index === -1) {
      infoList.push(info)
      return info
    }
    return null
  })

  const contactInfo = temp.filter((item) => !!item)

  const parseHTML = (str: string) => {
    if (!str) return ''
    const reg1 = /font-family[\s:][\sa-zA-Z0-9',-;]+/gm
    const reg2 = /font-size[\s:][\sa-zA-Z0-9',-;]+/gm
    const newStr = str.replace(reg1, '').replace(reg2, '')
    const html = newStr
      .split('<main').join('<div')
      .split('</main>').join('</div>')
      .split('<strong>').join('')
      .split('</strong>').join('')
      .split('<em>').join('')
      .split('</em>').join('')
      .split('\r\n').join(' ')
      .split('&bull;').join('•')
      .split('&lsquo;').join("'")
      .split('&rsquo;').join("'")
      .split('&ldquo;').join("\"")
      .split('&rdquo;').join("\"")
      .split(',  ,').join(',')

    if (!html.includes('</div>')) return `<div>${html}</div>`
    return html
  }

  const formatEmail = (str: string) => {
    if (!str) return null
    if (str.length > 34) {
      const startStr = str.slice(0, 34)
      const endStr = str.slice(34)
      return `${startStr}\n${endStr}`
    }
    return str
  }

  return (
    <Document>
      <Page
        size="A4"
        style={
          hospitals.length === 1
            ? styles.pbOneBlock
            : hospitals.length === 2
              ? styles.pbTwoBlcok
              : hospitals.length === 3
                ? styles.pbThreeBlock
                : styles.body
        }
      >
        <View style={styles.headerBox} fixed>
          <Image
            style={styles.topBgImage}
            src="/images/top-bar.png"
          />
          <Text style={styles.headerTxt}>Specialist Profile</Text>
          <View style={styles.mark}>
            <View style={styles.logoWrapper}>
              <Image
                src="/images/logo.png"
                style={styles.logo}
              />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.leftPanel}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.image}
                cache={false}
                src={{
                  uri: avatarUrl,
                  method: 'GET',
                  headers: {
                    'Cache-Control': 'no-cache',
                    'Access-Control-Allow-Origin': '*'
                  },
                  body: ''
                }}
              />
              <Image
                style={styles.imageBorder}
                src="/images/avatar-border.png"
              />
            </View>
            {profileCard && (
              <View style={styles.profileBox}>
                {displayName && (
                  <Text style={styles.titleTealTxt}>{displayName}</Text>
                )}
                {profileCard.roles && profileCard.roles.length > 0 && (
                  <Text style={styles.subTitleLightTxt}>{profileCard.roles.join(',')}</Text>
                )}
                {profileCard.specialties && profileCard.specialties.length > 0 && (
                  <Text style={styles.subTitleTealTxt}>{profileCard.specialties.join(', ')}</Text>
                )}
                <Text style={styles.normalBoldTxt}>
                  {`To arrange an appointment with ${displayName || 'the person'}, please contact:`}
                </Text>
                {(contactInfo.length === 1 || contactInfo.length < contactDetails.length) && (
                  <Text style={styles.normalBoldTxt}>{'Contact Details'}</Text>
                )}
                {contactInfo.map((item, index) => {
                  return (
                    <View key={index} style={styles.contactBlock}>
                      {contactInfo.length > 1 && contactInfo.length === contactDetails.length && item.hospital && (
                        <Text style={styles.normalBoldTxt}>{item.hospital}</Text>
                      )}
                      <Html stylesheet={stylesheet}>
                        {parseHTML(item.address)}
                      </Html>
                      {item.phone && (
                        <Text style={styles.normalLightTxt}><span style={styles.normalBoldTxt}>P</span> {item.phone || ''}</Text>
                      )}
                      {item.email && (
                        <Text style={styles.normalLightTxt}><span style={styles.normalBoldTxt}>E</span> {formatEmail(item.email.toLowerCase())}</Text>
                      )}
                      {item.fax && (
                        <Text style={styles.normalLightTxt}><span style={styles.normalBoldTxt}>F</span> {item.fax || ''}</Text>
                      )}
                      {site && (
                        <Text style={styles.normalLightTxt}>{site}</Text>
                      )}
                    </View>
                  )
                })}
              </View>
            )}
          </View>

          <View style={styles.rightPanel}>
            {!!introText && (
              <View style={styles.pb3}>
                <Html stylesheet={stylesheet}>{parseHTML(introText)}</Html>
              </View>
            )}
            {!!expertise && (
              <View style={styles.pb3}>
                <Text style={styles.subTitleBoldTxt}>Expertise</Text>
                <Html stylesheet={stylesheet}>{parseHTML(expertise)}</Html>
              </View>
            )}
            {!!interest && (
              <View style={styles.pb3}>
                <Text style={styles.subTitleBoldTxt}>Areas of special interest</Text>
                <Html stylesheet={stylesheet}>{parseHTML(interest)}</Html>
              </View>
            )}
          </View>
        </View>

        <View style={styles.footerSection} fixed>
          {hospitals
            && hospitals.length > 0
            && hospitals.map((hospital, index) => {
              const hospitalContactInfo = []
              if (hospital?.address) hospitalContactInfo.push(hospital?.address)
              if (hospital?.phone) hospitalContactInfo.push(`P ${formatPhoneNumber(hospital.phone)}`)
              if (hospital?.fax) hospitalContactInfo.push(`F ${formatPhoneNumber(hospital.fax)}`)

              return (
                <View key={index} style={styles.footer}>
                  <View style={styles.txtCenter}>
                    {hospital?.name && (
                      <Text style={styles.smallTealTxt}>{hospital.name}</Text>
                    )}

                    {hospitalContactInfo?.length > 0 && (
                      <Html stylesheet={stylesheet}>{parseHTML(setTitleCase(hospitalContactInfo.join(' | ')))}</Html>
                    )}

                    {hospital?.email && (
                      <Text style={styles.smallLightTxt}>{hospital.email.toLowerCase()}</Text>
                    )}

                    {hospital?.abn && (
                      <Text style={styles.smallestLightTxt}>{`ABN ${hospital.abn}`}</Text>
                    )}
                  </View>
                </View>
              )
            })}
        </View>
      </Page>
    </Document>
  )
};

Font.register({
  family: 'WorkSans',
  src: '/fonts/WorkSans-VariableFont_wght.ttf'
});

Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  contactBlock: {
    marginBottom: 8,
  },
  email: {
    whiteSpace: 'pre-line'
  },
  txtCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 4,
  },
  logoWrapper: {
    height: 30
  },
  logo: {
    height: '100%',
    width: 'auto',
  },
  markWrapper: {
    marginLeft: 8,
  },
  bigMarkTxt: {
    fontSize: 24,
    color: '#ffffff',
  },
  smallMarkTxt: {
    fontSize: 10,
    color: '#ffffff'
  },
  mark: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  footerSection: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  footer: {
    backgroundColor: '#edeeee',
    paddingVertical: 8,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8
  },
  smallestLightTxt: {
    color: '#9298ab',
    fontSize: 8,
    fontWeight: 600,
  },
  smallTealTxt: {
    color: '#29a9b9',
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 4,
  },
  smallLightTxt: {
    color: '#9298ab',
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 4,
  },
  pb3: {
    paddingBottom: 12,
  },
  iconBox: {},
  languageContent: {},

  languageBox: {
    marginTop: 15,
    border: '2px solid #29a9b9',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 12,
    flexDirection: 'row'
  },
  titleTealTxt: {
    color: '#29a9b9',
    fontSize: 14,
    fontWeight: 900,
    marginBottom: 12,
  },
  subTitleTealTxt: {
    color: '#29a9b9',
    fontSize: 10,
    fontWeight: 900,
    marginBottom: 8,
    fontFamily: 'WorkSans',
  },
  subTitleLightTxt: {
    color: '#9298ab',
    fontSize: 10,
    fontWeight: 900,
    fontFamily: 'WorkSans',
    marginBottom: 8
  },
  subTitleBoldTxt: {
    color: '#60656a',
    fontSize: 11,
    fontWeight: 900,
    fontFamily: 'WorkSans',
    marginBottom: 8
  },
  normalBoldTxt: {
    color: '#60656a',
    fontSize: 10,
    fontWeight: 900,
    fontFamily: 'WorkSans',
    marginBottom: 8
  },
  normalLightTxt: {
    color: '#9298ab',
    fontSize: 10,
    fontWeight: 100,
    fontFamily: 'WorkSans',
    letterSpacing: 0.1
  },
  profileBox: {
    marginTop: 15,
    border: '1px solid #29a9b9',
    borderRadius: 16,
    padding: 10
  },
  expertiseTxt: {
    fontSize: 11,
    paddingTop: 12
  },
  interestTxt: {
    fontSize: 11,
    paddingTop: 12
  },
  avatarBox: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: 120,
    height: 120,
    marginLeft: 36,
    border: '1px solid #29a9b9',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  imageBorder: {
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    position: 'absolute',
  },
  body: {
    paddingBottom: 70,
  },
  pbOneBlock: {
    paddingBottom: 110,
  },
  pbTwoBlcok: {
    paddingBottom: 190,
  },
  pbThreeBlock: {
    paddingBottom: 280,
  },
  headerBox: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  topBgImage: {
    width: '100%',
    position: 'absolute'
  },
  headerTxt: {
    color: '#ffffff',
    fontWeight: 'thin',
    marginLeft: 30,
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 40
  },
  leftPanel: {
    width: '40%',
    paddingLeft: 30,
    paddingRight: 10
  },
  rightPanel: {
    width: '60%',
    paddingLeft: 10,
    paddingRight: 30,
  },
})

const textStyle = {
  margin: '0 0 4px',
  color: '#9298ab',
  fontSize: 10,
  fontWeight: 100,
  fontFamily: 'WorkSans',
  letterSpacing: 0.1
}

const stylesheet = {
  div: textStyle,
  p: textStyle,
  h1: textStyle,
  h2: textStyle,
  h3: textStyle,
  h4: textStyle,
  h5: textStyle,
  h6: textStyle,
  li: textStyle,
  ul: {
    margin: 0
  },
}
export default PDFDocument
