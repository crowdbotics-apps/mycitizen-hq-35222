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
      <View style={styles.View_2_275}>
        <View style={styles.View_2_280}>
          <View style={styles.View_2_281}>
            <View style={styles.View_2_282}>
              <View style={styles.View_2_283}>
                <View style={styles.View_2_284} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/a921/8df12557e900937e132bcbba444f1b60"
                  }}
                  style={styles.ImageBackground_2_285}
                />
                <View style={styles.View_2_286} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b2/5a43/ade209ab677e80635fb34873412748ae"
                }}
                style={styles.ImageBackground_2_287}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d44/e375/dd5ba0c60a5fabd8d5dfb04eb8d17490"
                }}
                style={styles.ImageBackground_2_291}
              />
              <View style={styles.View_2_296}>
                <View style={styles.View_2_297}>
                  <Text style={styles.Text_2_297}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_516}>
        <Text style={styles.Text_2_516}>
          Lorem Ipsum is simply dummy text of the printing
        </Text>
      </View>
      <View style={styles.View_2_517}>
        <Text style={styles.Text_2_517}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy tex.
        </Text>
      </View>
      <View style={styles.View_2_518}>
        <View style={styles.View_2_519} />
        <View style={styles.View_2_520} />
        <View style={styles.View_2_521} />
      </View>
      <View style={styles.View_2_522}>
        <View style={styles.View_2_523}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14c4/96a7/4fb6ccf551f1f703b89035982104839b"
            }}
            style={styles.ImageBackground_2_524}
          />
          <View style={styles.View_2_526}>
            <Text style={styles.Text_2_526}>Next</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_35_1657}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb7/7b52/77bb13cab13ae09631e17935da3bb2da"
          }}
          style={styles.ImageBackground_35_1756}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e4/a4d2/594df696a6effaad90405c448442427f"
          }}
          style={styles.ImageBackground_35_1758}
        />
        <View style={styles.View_35_1772}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9209/0051/2b8331cf565046a548622951ac042d2f"
            }}
            style={styles.ImageBackground_35_1773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/421e/ccab/cac47cc4d3ce42b5f27d7dbb7d81b069"
            }}
            style={styles.ImageBackground_35_1774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a9c/a9d7/bb96ea61cd524f903aa8be8ec5ea2e61"
            }}
            style={styles.ImageBackground_35_1775}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/215d/a99e/690b88c9efaa2a9056ad6e995e8e6e31"
            }}
            style={styles.ImageBackground_35_1776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2b/0591/0f220985ecefc175fe879fe8a686a656"
            }}
            style={styles.ImageBackground_35_1777}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f72c/b774/69b94f83381b352e8208944793659397"
            }}
            style={styles.ImageBackground_35_1778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2328/8620/8c6071feda133d31cd12e25dec089697"
            }}
            style={styles.ImageBackground_35_1779}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5bc/6df0/705dc5a7ab60588717f052f4bf34f5a9"
            }}
            style={styles.ImageBackground_35_1780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5867/080c/05a7731fbed84df49c3fd35640e67be5"
            }}
            style={styles.ImageBackground_35_1781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95ff/ad97/2d97e1e2d5cf489988d9e64fd7f152ae"
            }}
            style={styles.ImageBackground_35_1782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed8/53ab/2233c611fe75ac2b776f9b9b9824ab72"
            }}
            style={styles.ImageBackground_35_1783}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34f6/fe18/38848fb018b17f9d30212694fd552668"
            }}
            style={styles.ImageBackground_35_1784}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4494/7768/d7bd3cba2fafe8db85c0ea2974fa734e"
            }}
            style={styles.ImageBackground_35_1785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e9e/981f/f120bb7ac14802bf8c7f62a5aa91608e"
            }}
            style={styles.ImageBackground_35_1786}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0540/943c/3d5d91cb275c90761af8edd3170b0377"
            }}
            style={styles.ImageBackground_35_1787}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2538/4c71/282601caf8c4aca41ab74babfb99e413"
            }}
            style={styles.ImageBackground_35_1788}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff3/b8b1/cf3fa6bf1a6a5b1de1a0432c6117351b"
            }}
            style={styles.ImageBackground_35_1789}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5eb/67ed/86d9d85f8000a8e99bcf6cd201ade7cc"
            }}
            style={styles.ImageBackground_35_1790}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/962b/b8a6/59ca6ad137c2eafb2992d3bc542541cc"
            }}
            style={styles.ImageBackground_35_1791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c9/83ee/a3028f72eb8b9730854d657ecc4d48fd"
            }}
            style={styles.ImageBackground_35_1792}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1685/4461/456bd1e68c6a01180ead842ddd112192"
            }}
            style={styles.ImageBackground_35_1793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/169e/6b00/39d72d3dd8ddd2b4a1e806784a608fc0"
            }}
            style={styles.ImageBackground_35_1794}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/28a5/23ffea2748922776d913d469895ad73d"
            }}
            style={styles.ImageBackground_35_1795}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6621/b6ca/af058e80923e5e203d4f1c60f88e5028"
            }}
            style={styles.ImageBackground_35_1796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0386/b235/cddab58892ae13d49ef0707bc4f1c6c3"
            }}
            style={styles.ImageBackground_35_1797}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2560/33bf/7f2e9de6c1325c0e81817c6bf66a5052"
            }}
            style={styles.ImageBackground_35_1798}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f224/2eef/1aa4b4a66809b0ff9f83e6e1022a2644"
            }}
            style={styles.ImageBackground_35_1799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da51/7c16/754ba7b29b35c6050f6b689d2fb8f4af"
            }}
            style={styles.ImageBackground_35_1800}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf1e/d99f/f3b60550ee6bc77bdfbec951e5037ff4"
            }}
            style={styles.ImageBackground_35_1801}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca1/949a/c3a3ae65304b3803f9a5655d9020c54f"
            }}
            style={styles.ImageBackground_35_1802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19af/bac4/181202f3e7e740c920b24d896f62979a"
            }}
            style={styles.ImageBackground_35_1803}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3cf/fe5d/05fca5e3265efe352fe04c52502cb8ac"
            }}
            style={styles.ImageBackground_35_1804}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4e7/b139/3440ce6f8e5c01c7bc487ef9fe431770"
            }}
            style={styles.ImageBackground_35_1805}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96ab/967f/156d56962f1085faa6d020898263f6ec"
            }}
            style={styles.ImageBackground_35_1806}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a7/5523/27300a087cc65e03d74cb22195e4746b"
            }}
            style={styles.ImageBackground_35_1807}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32fe/1a51/18f6b0c6bb2f221b53b83b79b236a339"
            }}
            style={styles.ImageBackground_35_1808}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a1/59c4/e3950e5ad2511a1258d7df4c0d180247"
            }}
            style={styles.ImageBackground_35_1809}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e0d/85a7/aabe79f05bc76b074cdae50d7a082a00"
            }}
            style={styles.ImageBackground_35_1810}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4052/1dc2/513ec44a1d14faffaacc66aebfc34186"
            }}
            style={styles.ImageBackground_35_1811}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cc/9d7d/49d281c0676301e0098978c201e32f74"
            }}
            style={styles.ImageBackground_35_1812}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4da/d9db/970bd35908fed8e53516ed0d161fa276"
            }}
            style={styles.ImageBackground_35_1813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/653f/795d/973a0b54b097a72d93740db2f39f7407"
            }}
            style={styles.ImageBackground_35_1815}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9209/0051/2b8331cf565046a548622951ac042d2f"
            }}
            style={styles.ImageBackground_35_1816}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/421e/ccab/cac47cc4d3ce42b5f27d7dbb7d81b069"
            }}
            style={styles.ImageBackground_35_1817}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a9c/a9d7/bb96ea61cd524f903aa8be8ec5ea2e61"
            }}
            style={styles.ImageBackground_35_1818}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/215d/a99e/690b88c9efaa2a9056ad6e995e8e6e31"
            }}
            style={styles.ImageBackground_35_1819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2b/0591/0f220985ecefc175fe879fe8a686a656"
            }}
            style={styles.ImageBackground_35_1820}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f72c/b774/69b94f83381b352e8208944793659397"
            }}
            style={styles.ImageBackground_35_1821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2328/8620/8c6071feda133d31cd12e25dec089697"
            }}
            style={styles.ImageBackground_35_1822}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5bc/6df0/705dc5a7ab60588717f052f4bf34f5a9"
            }}
            style={styles.ImageBackground_35_1823}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5867/080c/05a7731fbed84df49c3fd35640e67be5"
            }}
            style={styles.ImageBackground_35_1824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95ff/ad97/2d97e1e2d5cf489988d9e64fd7f152ae"
            }}
            style={styles.ImageBackground_35_1825}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed8/53ab/2233c611fe75ac2b776f9b9b9824ab72"
            }}
            style={styles.ImageBackground_35_1826}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34f6/fe18/38848fb018b17f9d30212694fd552668"
            }}
            style={styles.ImageBackground_35_1827}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4494/7768/d7bd3cba2fafe8db85c0ea2974fa734e"
            }}
            style={styles.ImageBackground_35_1828}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e9e/981f/f120bb7ac14802bf8c7f62a5aa91608e"
            }}
            style={styles.ImageBackground_35_1829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0540/943c/3d5d91cb275c90761af8edd3170b0377"
            }}
            style={styles.ImageBackground_35_1830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2538/4c71/282601caf8c4aca41ab74babfb99e413"
            }}
            style={styles.ImageBackground_35_1831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff3/b8b1/cf3fa6bf1a6a5b1de1a0432c6117351b"
            }}
            style={styles.ImageBackground_35_1832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5eb/67ed/86d9d85f8000a8e99bcf6cd201ade7cc"
            }}
            style={styles.ImageBackground_35_1833}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/962b/b8a6/59ca6ad137c2eafb2992d3bc542541cc"
            }}
            style={styles.ImageBackground_35_1834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c9/83ee/a3028f72eb8b9730854d657ecc4d48fd"
            }}
            style={styles.ImageBackground_35_1835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1685/4461/456bd1e68c6a01180ead842ddd112192"
            }}
            style={styles.ImageBackground_35_1836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/169e/6b00/39d72d3dd8ddd2b4a1e806784a608fc0"
            }}
            style={styles.ImageBackground_35_1837}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098a/28a5/23ffea2748922776d913d469895ad73d"
            }}
            style={styles.ImageBackground_35_1838}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6621/b6ca/af058e80923e5e203d4f1c60f88e5028"
            }}
            style={styles.ImageBackground_35_1839}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0386/b235/cddab58892ae13d49ef0707bc4f1c6c3"
            }}
            style={styles.ImageBackground_35_1840}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2560/33bf/7f2e9de6c1325c0e81817c6bf66a5052"
            }}
            style={styles.ImageBackground_35_1841}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f224/2eef/1aa4b4a66809b0ff9f83e6e1022a2644"
            }}
            style={styles.ImageBackground_35_1842}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da51/7c16/754ba7b29b35c6050f6b689d2fb8f4af"
            }}
            style={styles.ImageBackground_35_1843}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf1e/d99f/f3b60550ee6bc77bdfbec951e5037ff4"
            }}
            style={styles.ImageBackground_35_1844}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca1/949a/c3a3ae65304b3803f9a5655d9020c54f"
            }}
            style={styles.ImageBackground_35_1845}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19af/bac4/181202f3e7e740c920b24d896f62979a"
            }}
            style={styles.ImageBackground_35_1846}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3cf/fe5d/05fca5e3265efe352fe04c52502cb8ac"
            }}
            style={styles.ImageBackground_35_1847}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4e7/b139/3440ce6f8e5c01c7bc487ef9fe431770"
            }}
            style={styles.ImageBackground_35_1848}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96ab/967f/156d56962f1085faa6d020898263f6ec"
            }}
            style={styles.ImageBackground_35_1849}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a7/5523/27300a087cc65e03d74cb22195e4746b"
            }}
            style={styles.ImageBackground_35_1850}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32fe/1a51/18f6b0c6bb2f221b53b83b79b236a339"
            }}
            style={styles.ImageBackground_35_1851}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a1/59c4/e3950e5ad2511a1258d7df4c0d180247"
            }}
            style={styles.ImageBackground_35_1852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e0d/85a7/aabe79f05bc76b074cdae50d7a082a00"
            }}
            style={styles.ImageBackground_35_1853}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4052/1dc2/513ec44a1d14faffaacc66aebfc34186"
            }}
            style={styles.ImageBackground_35_1854}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cc/9d7d/49d281c0676301e0098978c201e32f74"
            }}
            style={styles.ImageBackground_35_1855}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4da/d9db/970bd35908fed8e53516ed0d161fa276"
            }}
            style={styles.ImageBackground_35_1856}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/653f/795d/973a0b54b097a72d93740db2f39f7407"
            }}
            style={styles.ImageBackground_35_1858}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d2a/d1cf/f0c5876030818480510e0d811dcf3230"
            }}
            style={styles.ImageBackground_35_1859}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3591/b09c/3f5cbd4ba557b7b432aa3c3b02f22616"
            }}
            style={styles.ImageBackground_35_1860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a73/ae91/ffead77ab41dd3fb8903c432b9429870"
            }}
            style={styles.ImageBackground_35_1861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f003/4a17/61329867993ae5cfd4da9e4f9d8bbea9"
            }}
            style={styles.ImageBackground_35_1862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8fb/284c/443a5827a1264083fe4ee7431187c3c7"
            }}
            style={styles.ImageBackground_35_1863}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bae/43e0/2fbe749e2d770e6323ed9077c41d5df3"
            }}
            style={styles.ImageBackground_35_1864}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bae/43e0/2fbe749e2d770e6323ed9077c41d5df3"
            }}
            style={styles.ImageBackground_35_1865}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00cb/c2fe/0b3f98388b1258a44b7b2465eaba73bb"
            }}
            style={styles.ImageBackground_35_1866}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/394d/820d/ce84bd0200512e50b48bd61e88b93f52"
            }}
            style={styles.ImageBackground_35_1867}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a983/e11a/e2b8d4150ab57f138652c4e1ae8eb257"
            }}
            style={styles.ImageBackground_35_1868}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/019a/3a41/44ba3ed951625703def80fb1be4e76de"
            }}
            style={styles.ImageBackground_35_1869}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05e5/8251/4271d6bcfc8eee11ff222fc1c344bdc7"
            }}
            style={styles.ImageBackground_35_1870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/9bf2/467300d7620c8d9b0bbc0adffba264d4"
            }}
            style={styles.ImageBackground_35_1871}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff81/ba41/7c50cde6051b9c00ebadd0085e8c2db2"
            }}
            style={styles.ImageBackground_35_1872}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb5/ad4b/7539012295ffb8abd5ae527c734f87d2"
            }}
            style={styles.ImageBackground_35_1873}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc0/1e64/a60015a5f64523b88a052db6a9ff086e"
            }}
            style={styles.ImageBackground_35_1874}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a16b/cc23/8be7013740aafe0d2d668b245909a095"
            }}
            style={styles.ImageBackground_35_1875}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef02/db14/d0e166745d8e93c240b40bc422d377d2"
            }}
            style={styles.ImageBackground_35_1876}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1036/a792/e57f8aee8edfaa08295ddb3aa875b91c"
            }}
            style={styles.ImageBackground_35_1877}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dcf/903b/886de03215683ea0697f7e4bd01b996c"
            }}
            style={styles.ImageBackground_35_1878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaa5/5b9e/0cc20c630709395bb3a19d13b26e9077"
            }}
            style={styles.ImageBackground_35_1879}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8862/2803/16e35081b32c9939fcb42cff613b5cb3"
            }}
            style={styles.ImageBackground_35_1880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/60c9/927b715126c7df137eff59a76042b7a3"
            }}
            style={styles.ImageBackground_35_1881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70ba/15fd/d89d0692ed5333abe8ede089e75fa5aa"
            }}
            style={styles.ImageBackground_35_1882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaf2/0156/da207c27a8ba2cade30a89e8d933efd9"
            }}
            style={styles.ImageBackground_35_1883}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/5239/21f1aee3e55e911d221841c514bf901b"
            }}
            style={styles.ImageBackground_35_1884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b133/a97d/00ef5f247cb5074f9c81a042ab8756e8"
            }}
            style={styles.ImageBackground_35_1885}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b703/c39f/e0bcdf3456c12942a80944e0f303a524"
            }}
            style={styles.ImageBackground_35_1890}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/052b/630f/62a7d7186322e0976b369b673741cf6c"
            }}
            style={styles.ImageBackground_35_1891}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a46d/258b/082b7343c5a65b38cc2f62f7d8a1dae3"
            }}
            style={styles.ImageBackground_35_1892}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b6/ee33/a007bac2b37c6715dfb6bc81e4aa0e07"
            }}
            style={styles.ImageBackground_35_1893}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a42e/f517/6e0c1b1d89abc036331a36666e33675d"
            }}
            style={styles.ImageBackground_35_1894}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd1d/39a3/fd28ec6c9b3ed4fe15c6ee36ea63276b"
            }}
            style={styles.ImageBackground_35_1895}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec40/0659/eb8df5729f9201e1cdd54592a9f908d0"
            }}
            style={styles.ImageBackground_35_1898}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64cb/6f9e/2ce74cd9f8aa1d7453067e2b9f050fd8"
            }}
            style={styles.ImageBackground_35_1899}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9304/8a3e/fc45f439833494db410344ca7e7d6724"
            }}
            style={styles.ImageBackground_35_1900}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8516/7dd1/5e03a7e9649c30b5186a45fd9ed68175"
            }}
            style={styles.ImageBackground_35_1901}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/675a/3e88/dac6ea781fec9207a07967682f1c2a2f"
            }}
            style={styles.ImageBackground_35_1902}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d22/e1b8/c43e02bd59a4f3f01abdae27f268e63e"
            }}
            style={styles.ImageBackground_35_1903}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b973/f029/33f84bf592ccadaf3b945a7eb1e1e956"
            }}
            style={styles.ImageBackground_35_1904}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f49/1c10/2dc3a22a136980078c59708b3ad7d492"
            }}
            style={styles.ImageBackground_35_1905}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3468/cefe/6ddaf42997dbbc25e9dcbf22cac5009c"
            }}
            style={styles.ImageBackground_35_1906}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0faf/52ca/843f5d2755d94781a4432d6efbb047cd"
            }}
            style={styles.ImageBackground_35_1907}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffcc/ddfa/a23e68bf89c236fdbd272e8c3c0975c8"
            }}
            style={styles.ImageBackground_35_1908}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f63a/e7d5/8d4de09121c8d8a720b739f7e0899a09"
            }}
            style={styles.ImageBackground_35_1909}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe28/0fca/fece4b501ff5201d53ab83170a660e92"
            }}
            style={styles.ImageBackground_35_1910}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d385/330b/80cb678c8b8b247098d1d39190851944"
            }}
            style={styles.ImageBackground_35_1911}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1129/cb58/f1e27b15086b8ab8ebeda299c9573bb9"
            }}
            style={styles.ImageBackground_35_1912}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa59/4315/6e90ed5a5237d195c15ed8b616914cce"
            }}
            style={styles.ImageBackground_35_1913}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c19/3597/76c621343573b1588ce9dea93cbc0235"
            }}
            style={styles.ImageBackground_35_1914}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2e/c8ee/39b6cfb239d8a54ca7527c7bb123115b"
            }}
            style={styles.ImageBackground_35_1915}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb61/1b9d/b31246c9f67f444d10b2c3b8ca4cc9a8"
            }}
            style={styles.ImageBackground_35_1916}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7847/1e3a/de110c556e5fbebcf3f43cc348b2f31c"
            }}
            style={styles.ImageBackground_35_1917}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f0/ca5f/2dd09a5ba6b9a562f8c49db518afee42"
            }}
            style={styles.ImageBackground_35_1918}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b0/f1ce/bfa76326a955960aa16fcc8ce49c1371"
            }}
            style={styles.ImageBackground_35_1919}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e633/a103/747347a73fbdac38e988f5fc09da5783"
            }}
            style={styles.ImageBackground_35_1920}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe9b/8a69/4fcb1bf73d45b449909a21fbc53f40be"
            }}
            style={styles.ImageBackground_35_1921}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0e/7718/c36e61a0af325c286c4407a8da94a577"
            }}
            style={styles.ImageBackground_35_1922}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c25/fcfa/a7408eedc4346dc1b4c341681e48841f"
            }}
            style={styles.ImageBackground_35_1923}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/569d/afc8/65a017b3bf5540e0650f42ba9a0dedc9"
            }}
            style={styles.ImageBackground_35_1924}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3edb/cb1f/270176e5cd6f366a75d0464e6163376d"
            }}
            style={styles.ImageBackground_35_1925}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cb5/db67/b63fdac3f1a630c5e78a567a2a30ba28"
            }}
            style={styles.ImageBackground_35_1926}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
            }}
            style={styles.ImageBackground_35_1927}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb76/a5c8/3265afa814a8fb6d5e863356f15ee25c"
            }}
            style={styles.ImageBackground_35_1928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3550/5c49/ce439fd4f7313c0fbad634a8758c883b"
            }}
            style={styles.ImageBackground_35_1929}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8d6/71f0/2e0befdf5a3423dfbac017ae0b0e64b8"
            }}
            style={styles.ImageBackground_35_1930}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba74/726a/4edf5a5eb9de339744d261e867432fb4"
            }}
            style={styles.ImageBackground_35_1931}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9709/1d03/ba0f3c50679fa997947b640e0748a4c4"
            }}
            style={styles.ImageBackground_35_1932}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ec/7bdf/2a6bbd7faff910c40c1c40070e747a24"
            }}
            style={styles.ImageBackground_35_1933}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c523/d4ce/7ca0f3a89d9075a3481349fd346fe238"
            }}
            style={styles.ImageBackground_35_1934}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d085/e36a/70de27f858e627908d7a7b834135b0c9"
            }}
            style={styles.ImageBackground_35_1935}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b17/ec43/d112b08e022d471136e51d6db0f77c06"
            }}
            style={styles.ImageBackground_35_1936}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d27/e020/ed3a84294b3b827c2cc79c36c4fd671a"
            }}
            style={styles.ImageBackground_35_1937}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0559/4510/8b044821f2076bddcd1aa6d1bd3315e9"
            }}
            style={styles.ImageBackground_35_1938}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd56/d467/f696e20ff1ed02c776a70f34613ba954"
            }}
            style={styles.ImageBackground_35_1939}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a85a/893d/53f14ed521c70221707a7d8a3520262a"
            }}
            style={styles.ImageBackground_35_1940}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3542/8796/61cdc740ae2b4b164ef4724b6f7494ac"
            }}
            style={styles.ImageBackground_35_1941}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2fb/f717/947e5a521881c13f8e5e9ae0b8ab5aab"
            }}
            style={styles.ImageBackground_35_1942}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9272/a4b9/a75ee047d68a6340516d3394e383dfea"
            }}
            style={styles.ImageBackground_35_1943}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733e/a0cc/c8e36a7fad62310600cddc6b1390c770"
            }}
            style={styles.ImageBackground_35_1944}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de9/5f42/de0c5817e96117031196fa5a9c47acbc"
            }}
            style={styles.ImageBackground_35_1945}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e50/5065/45536216d4703efc0607514be4043279"
            }}
            style={styles.ImageBackground_35_1946}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e70/8785/cce3ce0c891d3455fc0e38398bf5e6c1"
            }}
            style={styles.ImageBackground_35_1947}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2114/c804/8e51a30de099def95d5992769763988d"
            }}
            style={styles.ImageBackground_35_1948}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85a3/ab0d/01d8a2f8521634175ff42a77dd789263"
            }}
            style={styles.ImageBackground_35_1949}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b8a/340a/dfbed33fdf4f98de3b0c60522005b642"
            }}
            style={styles.ImageBackground_35_1950}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b93/68bd/b2cc37d74fc57f02d63c95f427ab888d"
            }}
            style={styles.ImageBackground_35_1951}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af7/7fa1/9fbafb6ee09d79203f7a496ed826b096"
            }}
            style={styles.ImageBackground_35_1952}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3637/5bf0/47cf6b628dbc77d0e28f67c8d2cc2588"
            }}
            style={styles.ImageBackground_35_1953}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2332/80dc/154cb84bd2798aab5c5ecef0a25c5ff3"
            }}
            style={styles.ImageBackground_35_1954}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a6b/0297/e3ec0eb77cc318118a64d155f5e45beb"
            }}
            style={styles.ImageBackground_35_1955}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b760/c71a/b64c5487ede2f7315485d1f7950dedd8"
            }}
            style={styles.ImageBackground_35_1956}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/269c/2e1b/a4d84d1577856f448caf098ac84d8a31"
            }}
            style={styles.ImageBackground_35_1957}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ab/8f45/8f43cc59cb0a7be6f411d9ba7b9d4d6b"
            }}
            style={styles.ImageBackground_35_1958}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a2/9f0b/556e445ea0e5808f688401d260f29040"
            }}
            style={styles.ImageBackground_35_1959}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa1d/75ad/2e438af2a8ef5a334eb7386449cdf5ba"
            }}
            style={styles.ImageBackground_35_1960}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ea/2688/782dfbea736ac28e3820185dbd6a0de9"
            }}
            style={styles.ImageBackground_35_1961}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/584f/b2b9/5acc170ea4c3b1bd416f57fa66c1b2fb"
            }}
            style={styles.ImageBackground_35_1962}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb9d/c6f6/d791c7feeefb8d64f4535a5b327f4feb"
            }}
            style={styles.ImageBackground_35_1963}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5806/8859/be1a3355ccc25b512fa0f8b01c5a2328"
            }}
            style={styles.ImageBackground_35_1964}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2d4/aecf/f57c4f5fcfc2159fe37ba7f1c2ac6e6a"
            }}
            style={styles.ImageBackground_35_1965}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3132/fbf2/1c90a270005b187f5a38742a28a2e1f8"
            }}
            style={styles.ImageBackground_35_1966}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7844/5349/d12b71c6141880a804bcf779a4a985bd"
            }}
            style={styles.ImageBackground_35_1967}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a23/5a56/3995823b45764c58c326838de0377d9c"
            }}
            style={styles.ImageBackground_35_1968}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3619/490f/c5a6d920d14ea6f9d927bdf2d1ac506f"
            }}
            style={styles.ImageBackground_35_1969}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7e/b477/8046e99e53ec231ac6acaa792232ac4b"
            }}
            style={styles.ImageBackground_35_1970}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 252, 255, 1)" },
  View_2: { height: hp("111%") },
  View_2_275: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_280: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_281: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_282: {
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
  View_2_283: {
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
  View_2_284: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(18, 13, 38, 1)",
    borderWidth: 1
  },
  ImageBackground_2_285: {
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
  View_2_286: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 13, 38, 1)"
  },
  ImageBackground_2_287: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_2_291: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_2_296: {
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
  View_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_297: {
    color: "rgba(18, 13, 38, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_516: {
    width: wp("66%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_2_516: {
    color: "rgba(79, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2_517: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_2_517: {
    color: "rgba(79, 84, 84, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2_518: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("94%")
  },
  View_2_519: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 40, 45, 1)"
  },
  View_2_520: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 40, 45, 1)"
  },
  View_2_521: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 40, 45, 1)"
  },
  View_2_522: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("97%")
  },
  View_2_523: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_524: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_526: {
    width: wp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    justifyContent: "center"
  },
  Text_2_526: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_35_1657: {
    width: wp("123%"),
    minWidth: wp("123%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_35_1756: {
    width: wp("105%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1758: {
    width: wp("18%"),
    height: hp("18%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_35_1772: {
    width: wp("79%"),
    height: hp("51%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_35_1773: {
    width: wp("36%"),
    height: hp("12%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_35_1774: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1775: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_35_1776: {
    width: wp("27%"),
    height: hp("28%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_35_1777: {
    width: wp("9%"),
    height: hp("24%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1778: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_35_1779: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_35_1780: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_35_1781: {
    width: wp("18%"),
    height: hp("33%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_35_1782: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_35_1783: {
    width: wp("19%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_35_1784: {
    width: wp("2%"),
    height: hp("13%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_35_1785: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_35_1786: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_35_1787: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_35_1788: {
    width: wp("23%"),
    height: hp("34%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1789: {
    width: wp("14%"),
    height: hp("17%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1790: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_35_1791: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_35_1792: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1793: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_35_1794: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_1795: {
    width: wp("21%"),
    height: hp("13%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1796: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1797: {
    width: wp("12%"),
    height: hp("20%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_35_1798: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1799: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1800: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1801: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_35_1802: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1803: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_35_1804: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_35_1805: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1806: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1807: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1808: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_35_1809: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1810: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_35_1811: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1812: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1813: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1815: {
    width: wp("12%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1816: {
    width: wp("36%"),
    height: hp("12%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_35_1817: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1818: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_35_1819: {
    width: wp("27%"),
    height: hp("28%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_35_1820: {
    width: wp("9%"),
    height: hp("24%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1821: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_35_1822: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_35_1823: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_35_1824: {
    width: wp("18%"),
    height: hp("33%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_35_1825: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_35_1826: {
    width: wp("19%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_35_1827: {
    width: wp("2%"),
    height: hp("13%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_35_1828: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_35_1829: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_35_1830: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_35_1831: {
    width: wp("23%"),
    height: hp("34%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1832: {
    width: wp("14%"),
    height: hp("17%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1833: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_35_1834: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_35_1835: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1836: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_35_1837: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_1838: {
    width: wp("21%"),
    height: hp("13%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1839: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1840: {
    width: wp("12%"),
    height: hp("20%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_35_1841: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1842: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1843: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1844: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_35_1845: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1846: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_35_1847: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_35_1848: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1849: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1850: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1851: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_35_1852: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1853: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_35_1854: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1855: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1856: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1858: {
    width: wp("12%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1859: {
    width: wp("22%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1860: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_35_1861: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_35_1862: {
    width: wp("17%"),
    height: hp("16%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1863: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1864: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_35_1865: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_35_1866: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_35_1867: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_35_1868: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_35_1869: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1870: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_1871: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_35_1872: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_35_1873: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1874: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_35_1875: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_35_1876: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_35_1877: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1878: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_35_1879: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_35_1880: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_35_1881: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_35_1882: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_35_1883: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_35_1884: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_35_1885: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_35_1890: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1891: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_35_1892: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_35_1893: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_35_1894: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_35_1895: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_35_1898: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1899: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_35_1900: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_35_1901: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_35_1902: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1903: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_35_1904: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1905: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_35_1906: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1907: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_35_1908: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1909: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1910: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1911: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_35_1912: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1913: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1914: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1915: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1916: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_35_1917: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_35_1918: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1919: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_35_1920: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_35_1921: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_35_1922: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_35_1923: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1924: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_35_1925: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_35_1926: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_35_1927: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_35_1928: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_35_1929: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_35_1930: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_35_1931: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_35_1932: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_35_1933: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_35_1934: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_35_1935: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_35_1936: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_35_1937: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_35_1938: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_35_1939: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1940: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_35_1941: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_35_1942: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_35_1943: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_35_1944: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1945: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_35_1946: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1947: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_35_1948: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_35_1949: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_1950: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_35_1951: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_35_1952: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_35_1953: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_35_1954: {
    width: wp("13%"),
    height: hp("19%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_35_1955: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_35_1956: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_35_1957: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_35_1958: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_35_1959: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_35_1960: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_35_1961: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_35_1962: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_35_1963: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_35_1964: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_35_1965: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_35_1966: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_35_1967: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_35_1968: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_35_1969: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_35_1970: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
