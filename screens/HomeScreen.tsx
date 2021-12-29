import { BottomTabScreenCustomProps } from '../types';
import Tweet from '../components/Tweet';
import { ScrollView } from 'react-native';

export default function HomeScreen({ navigation }: BottomTabScreenCustomProps<'Home'>) {
  return (
    <>
      <ScrollView>
        <Tweet
          displayName="食楽園〜幸福に空腹を満たす"
          userName="@hogehogehoge"
          time={28}
          text="ポークスペアリブ"
          imagePath="https://pbs.twimg.com/media/Ej-sbTJVcAIh0_n?format=jpg&amp;name=large"
          messageCount={0}
          retweetCount={21}
          likeCount={118}
        />
        <Tweet
          displayName="泉鏡花"
          userName="@izumi_kyoka"
          time={28}
          text="あれあれ見たか、あれ見たか。二つ蜻蛉とんぼが草の葉に、かやつり草に宿をかり、人目しのぶと思えども、羽はうすものかくされぬ、すきや明石あかしに緋ひぢりめん、肌のしろさも浅ましや、白い絹地の赤蜻蛉。"
          messageCount={2}
          retweetCount={21}
          likeCount={118}
        />
      </ScrollView>
    </>
  );
}
