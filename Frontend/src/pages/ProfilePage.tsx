// profile page (/profile/:nickname)
import { useParams } from "react-router-dom";

import ProfileImageArea from "components/profile/ProfileImageArea";
import ProfileNicknameArea from "components/profile/ProfileNicknameArea";
import ProfileTabComp from "components/profile/ProfileTabComp";

import styles from "./ProfilePage.module.css";

const ProfilePage: React.FC = () => {
  const params = useParams();
  const nickname = params.nickname;

  // useAxios api get
  // 임시 data
  const data = {
    imgUrl: "totoro.jpg",
    nftList: [
      {
        id: 1,
        title:
          "귀여운 토토로 삼형제와 발랄한 자매 사츠키, 메이의 우당탕탕 가족사진입니다",
        imgUrl: "totoro.jpg",
        description: "오순도순 토토로 가족",
        example:
          "나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. ",
      },
      {
        id: 2,
        title: "누가 이렇게 예쁘게 낳았어? 엄마엄마가~",
        imgUrl: "newjeans.jpg",
        description: "뉴진스의 곡 OMG 속 가사인 oh my oh my god 가 엄마엄마가~로 들린다고 해서 시작되었다.",
        example:
          "틱톡, 릴스 챌린지로 자리잡은 밈이다. 누가 이렇게 예쁘게 낳았어? 라고 질문하면 뉴진스의 OMG 노래를 부르며 엄마엄마가~ 라고 답한다.",
      },
      {
        id: 3,
        title: "알아들었으면 끄덕여",
        imgUrl: "theglory.jpeg",
        description: "내 말 알아들었으면 끄덕여라",
        example:
          "인기 드라마 더 글로리 속 학교 폭력 가해자 박연진이 같은 무리의 친구(?) 최혜정에게 하는 대사이다. 최혜정이 박연진 남편의 친구 무리에게 박연진의 학창 시절에 대한 이야기를 해서 박연진이 화나서 하는 대사이다.",
      },
      {
        id: 4,
        title:
          "귀여운 토토로 삼형제와 발랄한 자매 사츠키, 메이의 우당탕탕 가족사진입니다",
        imgUrl: "totoro.jpg",
        description: "오순도순 토토로 가족",
        example:
          "나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. 나무 위에 큰 토토로, 중간 토토로, 작은 토토로, 사츠키와 메이가 앉아 한가로운 오후를 보내고 있다. ",
      },
      {
        id: 5,
        title: "누가 이렇게 예쁘게 낳았어? 엄마엄마가~",
        imgUrl: "newjeans.jpg",
        description: "뉴진스의 곡 OMG 속 가사인 oh my oh my god 가 엄마엄마가~로 들린다고 해서 시작되었다.",
        example:
          "틱톡, 릴스 챌린지로 자리잡은 밈이다. 누가 이렇게 예쁘게 낳았어? 라고 질문하면 뉴진스의 OMG 노래를 부르며 엄마엄마가~ 라고 답한다.",
      },
      {
        id: 6,
        title: "알아들었으면 끄덕여",
        imgUrl: "theglory.jpeg",
        description: "내 말 알아들었으면 끄덕여라",
        example:
          "인기 드라마 더 글로리 속 학교 폭력 가해자 박연진이 같은 무리의 친구(?) 최혜정에게 하는 대사이다. 최혜정이 박연진 남편의 친구 무리에게 박연진의 학창 시절에 대한 이야기를 해서 박연진이 화나서 하는 대사이다.",
      },
    ],
    auctionList: [
      // {
      //   meme_id: 1,
      //   auction_id: 1,
      //   title:
      //     "귀여운 토토로 삼형제와 발랄한 자매 사츠키, 메이의 우당탕탕 가족사진입니다",
      //   time: "16시간 32분",
      //   highest_bid: 430,
      //   imgUrl: "totoro.jpg",
      // },
      // {
      //   meme_id: 2,
      //   auction_id: 3,
      //   title: "누가 이렇게 예쁘게 낳았어? 엄마엄마가~",
      //   time: "5시간 32분",
      //   highest_bid: 200,
      //   imgUrl: "newjeans.jpg",
      // },
      // {
      //   meme_id: 3,
      //   auction_id: 2,
      //   title: "알아들었으면 끄덕여",
      //   time: "20시간 32분",
      //   highest_bid: 500,
      //   imgUrl: "theglory.jpeg",
      // },
      // {
      //   meme_id: 4,
      //   auction_id: 1,
      //   title:
      //     "귀여운 토토로 삼형제와 발랄한 자매 사츠키, 메이의 우당탕탕 가족사진입니다",
      //   time: "16시간 32분",
      //   highest_bid: 430,
      //   imgUrl: "totoro.jpg",
      // },
      // {
      //   meme_id: 5,
      //   auction_id: 3,
      //   title: "누가 이렇게 예쁘게 낳았어? 엄마엄마가~",
      //   time: "5시간 32분",
      //   highest_bid: 200,
      //   imgUrl: "newjeans.jpg",
      // },
      // {
      //   meme_id: 6,
      //   auction_id: 2,
      //   title: "알아들었으면 끄덕여",
      //   time: "20시간 32분",
      //   highest_bid: 500,
      //   imgUrl: "theglory.jpeg",
      // },
    ],
  }

  return (
    <>
      {nickname && (
        <div className={styles.pageContainer}>
          <ProfileImageArea imgUrl={data.imgUrl} />
          <ProfileNicknameArea nickname={nickname} />
          <ProfileTabComp nickname={nickname} nftList={data.nftList} auctionList={data.auctionList}/>
        </div>
      )}
    </>
  );
};

export default ProfilePage;