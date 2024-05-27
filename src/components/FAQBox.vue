<script setup lang="ts">
import { ref } from 'vue';

interface Question {
  ID: number;
  Question: string;
  Explanation: string;
  Opened: boolean;
}
interface Topics {
  Topic: string;
  BOXopened: boolean;
  Questions: Question[];
}
const Topics = ref<Topics[]>([
  {
    Topic: "Az oldalról",
    BOXopened: true,
    Questions: [
      { ID: 1, Question: 'Mi is ez az Informee?', Explanation: 'Békéscsaba mentők', Opened: false },
      { ID: 2, Question: 'Hogyan tudok ennek a tagja lenni?', Explanation: 'Békéscsaba mentők', Opened: false },
      { ID: 3, Question: 'Hol született Molnár Krisztián?', Explanation: 'Békéscsaba mentők', Opened: false },
      { ID: 4, Question: 'Mi van a halál után?', Explanation: 'Békéscsaba mentők', Opened: false }
    ]
  },
  {
    Topic: 'Használat',
    BOXopened: true,
    Questions: [
      { ID: 5, Question: 'Hogyan hozok/hozhatok létre posztot?', Explanation: 'Ligma balls', Opened: false },
      { ID: 6, Question: 'Hogyan módosíthatom a posztomat?', Explanation: 'Békéscsaba mentők', Opened: false },
      { ID: 7, Question: 'Hogyan tudok mások posztjához hozzászólni?', Explanation: 'Békéscsaba mentők', Opened: false },
      { ID: 8, Question: 'Hogyan tudok jelenteni idejét múlt posztokat? (Pl: nem működő külsős linkek)', Explanation: 'Békéscsaba mentők', Opened: false }
    ]
  },
  {
    Topic: 'Szabályzat',
    BOXopened: true,
    Questions: [
      {
        ID: 9,
        Question: '1. Tartsd tiszteletben másokat.',
        Explanation:
          'Tilos a másik személy becsmérlése, orcázatának támadása és érzékeny információinak a kiszivárogtatása.',
        Opened: false
      },

      { ID: 10,
        Question: '2. Legyenek a posztjaid hitelesek',
        Explanation: 'Ne ossz meg kétes, hamis tényeket, vagy olyan dolgokat, amelyek félrevezetőek.', 
        Opened: false },

      { ID: 11,
        Question: '3. Szerezsd a káposztát',
        Explanation: 'Vagy legalább is ne utáld.',
        Opened: false },

      { ID: 12,
        Question: '4. valami',
        Explanation: 'megettem ezt a valaszt 1984',
        Opened: false }
    ]
  }
]);

const toggleBox = (topicIndex: number) => {
  Topics.value[topicIndex].BOXopened = !Topics.value[topicIndex].BOXopened;

  if (!Topics.value[topicIndex].BOXopened) {
    Topics.value[topicIndex].Questions.forEach((question) => {
      question.Opened = false;
    });
  }
};
const toggleQuestion = (TopicIndex: number, QuestionIndex: number) => {
  Topics.value.forEach((topic, tIndex) => {
    if (tIndex === TopicIndex) {
      topic.Questions.forEach((question, qIndex) => {
        if (qIndex === QuestionIndex) {
          question.Opened = !question.Opened;
        }
      });
    }
  });
};
</script>
<template>
  <div
    v-for="(topic, index) in Topics"
    :key="index"
    class="Full w-full h-full flex flex-row justify-center content-center items-center p-3"
  >
    <div
      v-if="topic.BOXopened"
      class="FullBox flex flex-col justify-center content-center items-center w-full h-1/3 bg-orange-400 rounded drop-shadow-lg"
    >
      <div class="flex flex-col justify-center content-center items-center h-5/6 gap-3 p-3">
        <h3 class="text-neutral-50 text-3xl">{{ topic.Topic }}</h3>
        <svg width="46" height="80" viewBox="0 0 46 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.166 54.6667C17.166 49.0417 17.6695 44.9965 18.6764 42.5312C19.6834 40.066 21.8188 37.375 25.0827 34.4583C27.9299 31.9583 30.1 29.7882 31.5931 27.9479C33.0862 26.1076 33.8327 24.0069 33.8327 21.6458C33.8327 18.7986 32.8778 16.4375 30.9681 14.5625C29.0584 12.6875 26.4021 11.75 22.9993 11.75C19.4577 11.75 16.7667 12.8264 14.9264 14.9792C13.0862 17.1319 11.7841 19.3194 11.0202 21.5417L0.291016 16.9583C1.74935 12.5139 4.42296 8.65972 8.31185 5.39583C12.2007 2.13194 17.0966 0.5 22.9993 0.5C30.291 0.5 35.8987 2.53125 39.8223 6.59375C43.7459 10.6562 45.7077 15.5347 45.7077 21.2292C45.7077 24.7014 44.9612 27.6701 43.4681 30.1354C41.975 32.6007 39.6313 35.3958 36.4369 38.5208C33.0341 41.7847 30.9681 44.2674 30.2389 45.9688C29.5098 47.6701 29.1452 50.5694 29.1452 54.6667H17.166ZM22.9993 79.6667C20.7077 79.6667 18.7459 78.8507 17.1139 77.2188C15.482 75.5868 14.666 73.625 14.666 71.3333C14.666 69.0417 15.482 67.0799 17.1139 65.4479C18.7459 63.816 20.7077 63 22.9993 63C25.291 63 27.2528 63.816 28.8848 65.4479C30.5167 67.0799 31.3327 69.0417 31.3327 71.3333C31.3327 73.625 30.5167 75.5868 28.8848 77.2188C27.2528 78.8507 25.291 79.6667 22.9993 79.6667Z"
            fill="#E8EAED"
          />
        </svg>
      </div>

      <div
        class="dropDown flex flex-row justify-center content-center items-center h-1/6 w-full hover:bg-orange-300 active:bg-orange-500 duration-200"
        @click.prevent="() => toggleBox(index)"
      >
        <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.512163 1.18436C-0.138672 1.83521 -0.138672 2.89055 0.512163 3.54138L8.66599 11.687C9.96783 12.9877 12.0775 12.9872 13.3788 11.686L21.5294 3.53538C22.1803 2.88455 22.1803 1.82921 21.5294 1.17835C20.8785 0.527465 19.8233 0.527465 19.1724 1.17835L12.1963 8.15438C11.5455 8.80538 10.4902 8.80538 9.83933 8.15438L2.86916 1.18436C2.21833 0.533481 1.16316 0.533481 0.512163 1.18436Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </div>
    <div v-else class="flex flex-col justify-center content-center items-start w-full h-auto">
      <div class="FullBox flex flex-col justify-center content-center items-center w-full h-full bg-orange-400 rounded">
        <div class="flex flex-col justify-center content-center items-center h-full gap-3 p-3 m-20">
          <h3 class="text-neutral-50 text-3xl">{{ topic.Topic }}</h3>
          <svg width="46" height="80" viewBox="0 0 46 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.166 54.6667C17.166 49.0417 17.6695 44.9965 18.6764 42.5312C19.6834 40.066 21.8188 37.375 25.0827 34.4583C27.9299 31.9583 30.1 29.7882 31.5931 27.9479C33.0862 26.1076 33.8327 24.0069 33.8327 21.6458C33.8327 18.7986 32.8778 16.4375 30.9681 14.5625C29.0584 12.6875 26.4021 11.75 22.9993 11.75C19.4577 11.75 16.7667 12.8264 14.9264 14.9792C13.0862 17.1319 11.7841 19.3194 11.0202 21.5417L0.291016 16.9583C1.74935 12.5139 4.42296 8.65972 8.31185 5.39583C12.2007 2.13194 17.0966 0.5 22.9993 0.5C30.291 0.5 35.8987 2.53125 39.8223 6.59375C43.7459 10.6562 45.7077 15.5347 45.7077 21.2292C45.7077 24.7014 44.9612 27.6701 43.4681 30.1354C41.975 32.6007 39.6313 35.3958 36.4369 38.5208C33.0341 41.7847 30.9681 44.2674 30.2389 45.9688C29.5098 47.6701 29.1452 50.5694 29.1452 54.6667H17.166ZM22.9993 79.6667C20.7077 79.6667 18.7459 78.8507 17.1139 77.2188C15.482 75.5868 14.666 73.625 14.666 71.3333C14.666 69.0417 15.482 67.0799 17.1139 65.4479C18.7459 63.816 20.7077 63 22.9993 63C25.291 63 27.2528 63.816 28.8848 65.4479C30.5167 67.0799 31.3327 69.0417 31.3327 71.3333C31.3327 73.625 30.5167 75.5868 28.8848 77.2188C27.2528 78.8507 25.291 79.6667 22.9993 79.6667Z"
              fill="#E8EAED"
            />
          </svg>
        </div>

        <div
          class="dropDown flex flex-row justify-center content-center items-center h-1/6 w-full hover:bg-orange-300 active:bg-orange-500 duration-200"
          @click.prevent="() => toggleBox(index)"
        >
          <svg
            class="rotate-180 m-5"
            width="23"
            height="13"
            viewBox="0 0 23 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.512163 1.18436C-0.138672 1.83521 -0.138672 2.89055 0.512163 3.54138L8.66599 11.687C9.96783 12.9877 12.0775 12.9872 13.3788 11.686L21.5294 3.53538C22.1803 2.88455 22.1803 1.82921 21.5294 1.17835C20.8785 0.527465 19.8233 0.527465 19.1724 1.17835L12.1963 8.15438C11.5455 8.80538 10.4902 8.80538 9.83933 8.15438L2.86916 1.18436C2.21833 0.533481 1.16316 0.533481 0.512163 1.18436Z"
              fill="#FAFAFA"
            />
          </svg>
        </div>
        <div class="Qlist flex flex-col justify-center items-center w-full bg-neutral-200">
          <div
            v-for="(question, questionIndex) in topic.Questions"
            :key="question.ID"
            class="Questions flex flex-row justify-between content-center items-center bg-neutral-200 w-full hover:bg-neutral-300 active:bg-neutral-100 duration-200 pt-3"
          >
            <div
              v-if="question.Opened === false"
              class="flex-1 flex justify-center"
              @click.prevent="() => toggleQuestion(index, questionIndex as number)"
            >
              <div class="flex-1 flex justify-center">
                <h3 class="text-xl text-neutral-600 mb-3">{{ question.Question }}</h3>
              </div>
              <svg
                class="ml-auto mr-3 mt-3 mb-3"
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="QdropDown fill-neutral-600"
                  d="M0.512163 1.18436C-0.138672 1.83521 -0.138672 2.89055 0.512163 3.54138L8.66599 11.687C9.96783 12.9877 12.0775 12.9872 13.3788 11.686L21.5294 3.53538C22.1803 2.88455 22.1803 1.82921 21.5294 1.17835C20.8785 0.527465 19.8233 0.527465 19.1724 1.17835L12.1963 8.15438C11.5455 8.80538 10.4902 8.80538 9.83933 8.15438L2.86916 1.18436C2.21833 0.533481 1.16316 0.533481 0.512163 1.18436Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <div
              v-else
              class="flex-1 flex flex-col justify-center content-center"
              @click.prevent="() => toggleQuestion(index, questionIndex as number)"
            >
              <div class="flex-1 flex justify-center content-center items-center">
                <div class="flex-1 flex justify-center">
                  <h3 class="text-xl text-neutral-600 mb-3">{{ question.Question }}</h3>
                </div>
                <svg
                  class="ml-auto rotate-180 mr-3 mt-3 mb-3"
                  width="23"
                  height="13"
                  viewBox="0 0 23 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="QdropDown fill-neutral-600"
                    d="M0.512163 1.18436C-0.138672 1.83521 -0.138672 2.89055 0.512163 3.54138L8.66599 11.687C9.96783 12.9877 12.0775 12.9872 13.3788 11.686L21.5294 3.53538C22.1803 2.88455 22.1803 1.82921 21.5294 1.17835C20.8785 0.527465 19.8233 0.527465 19.1724 1.17835L12.1963 8.15438C11.5455 8.80538 10.4902 8.80538 9.83933 8.15438L2.86916 1.18436C2.21833 0.533481 1.16316 0.533481 0.512163 1.18436Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div class="flex-1 flex flex-col justify-center content-center items-center p-3 bg-neutral-100">
                <p class="text-neutral-600 font-semibold text-justify">
                  {{ question.Explanation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropDown {
  border-radius: 0 0 0.25rem 0.25rem;
}
.Qlist {
  border-radius: 0.25rem 0.25rem 0 0;
}
@media only screen and (max-width: 700px) {
  .Full {
    height:;
  }
}
</style>
