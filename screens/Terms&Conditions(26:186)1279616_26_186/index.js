import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_26_191}>
        <View style={styles.View_26_192}>
          <View style={styles.View_26_193}>
            <View style={styles.View_26_194}>
              <View style={styles.View_26_195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0c2/bc6a/e1a87165985a9422f8c4bdf0040c3283"
                }}
                style={styles.ImageBackground_26_196}
              />
              <View style={styles.View_26_197} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6588/973b/dcc2ffa0cf7ce326c4e7ee155eb46c9a"
              }}
              style={styles.ImageBackground_26_198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb19/2c13/2754f31366666616a29d94d94acb2951"
              }}
              style={styles.ImageBackground_26_202}
            />
            <View style={styles.View_26_207}>
              <View style={styles.View_26_208}>
                <Text style={styles.Text_26_208}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_26_214}>
        <Text style={styles.Text_26_214}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci magna
          cursus dolor aenean. Ut fringilla in amet elit ultrices arcu. Nisl
          purus facilisis cum vitae eget dis placerat eget egestas. Arcu nunc
          hendrerit donec amet, lectus dolor viverra tortor, neque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Orci magna cursus dolor
          aenean. Ut fringilla in amet elit ultrices arcu. Nisl purus facilisis
          cum vitae eget dis placerat eget egestas. Arcu nunc hendrerit donec
          amet, lectus dolor viverra tortor, neque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Orci magna cursus dolor aenean. Ut
          fringilla in amet elit ultrices arcu. Nisl purus facilisis cum vitae
          eget dis placerat eget egestas. Arcu nunc hendrerit donec amet, lectus
          dolor viverra tortor, neque.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Orci magna cursus dolor aenean. Ut fringilla in amet
          elit ultrices arcu. Nisl purus facilisis cum vitae eget dis placerat
          eget egestas. Arcu nunc hendrerit donec amet, lectus dolor viverra
          tortor, neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Orci magna cursus dolor aenean. Ut fringilla in amet elit ultrices
          arcu.{" "}
        </Text>
      </View>
      <View style={styles.View_26_298}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63ef/3dfa/4feda7713344fcc9c30b089a25fb634d"
          }}
          style={styles.ImageBackground_26_299}
        />
      </View>
      <View style={styles.View_26_301}>
        <Text style={styles.Text_26_301}>Terms &amp; Conditions</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("111%") },
  View_26_191: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_192: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_193: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_26_194: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("1%")
  },
  View_26_195: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(79, 84, 84, 1)",
    borderWidth: 1
  },
  ImageBackground_26_196: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_26_197: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(79, 84, 84, 1)"
  },
  ImageBackground_26_198: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_26_202: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_26_207: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_208: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_26_208: {
    color: "rgba(79, 84, 84, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_26_214: {
    width: wp("87%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_26_214: {
    color: "rgba(79, 84, 84, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_298: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_26_299: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_301: {
    width: wp("37%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_26_301: {
    color: "rgba(79, 84, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
