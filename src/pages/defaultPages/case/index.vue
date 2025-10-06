<script setup lang="ts">
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()

</script>

<template>
  <div class="case-main app-header-max-width">
    <div class="top-view">
      <p class="title">
        <span>由</span>
        <template v-if="isMobile">
          <svg  v-if="activeThemeName=='normal'" width="151" height="55" viewBox="0 0 151 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_881_54802)">
              <rect x="8" y="4" width="135" height="38.8847" rx="19.4423" fill="#DDE4F0" shape-rendering="crispEdges"/>
              <rect x="8.5" y="4.5" width="134" height="37.8847" rx="18.9423" stroke="#C6C2DA" shape-rendering="crispEdges"/>
              <g filter="url(#filter1_d_881_54802)">
                <path d="M26.7666 34.8844C24.6035 34.8844 22.7081 34.4047 21.0806 33.4453C19.4517 32.4859 18.1981 31.1473 17.3196 29.4297C16.4399 27.712 16 25.7403 16 23.5132C16 21.5944 16.3855 19.7761 17.1592 18.0585C17.9316 16.3408 19.149 14.9313 20.8128 13.8301C22.4765 12.7288 24.5556 12.1781 27.0513 12.1781C28.1212 12.1781 29.1303 12.2968 30.0813 12.5328L29.6181 17.6858C29.0954 17.5439 28.4886 17.473 27.8004 17.473C26.0408 17.473 24.6332 17.9772 23.5762 18.9831C22.5179 19.9902 21.9901 21.548 21.9901 23.6564C21.9901 25.5275 22.5011 26.9911 23.5232 28.0447C24.5453 29.0995 25.9477 29.6257 27.7305 29.6257C28.3955 29.6257 29.1083 29.5315 29.8691 29.3407L30.1537 34.4937C29.0359 34.7542 27.9077 34.8844 26.7666 34.8844Z" fill="#433D63"/>
                <path d="M35.964 16.7969H30.6519V12.4267H47.0864V16.7969H41.7743V34.3863H35.9627V16.7969H35.964Z" fill="#433D63"/>
                <path d="M59.2254 32.7344C57.5254 31.539 56.1062 30.1463 54.9651 28.5589V23.8327C56.1773 23.6431 57.092 23.2163 57.7104 22.5534C58.3289 21.8906 58.6381 21.0614 58.6381 20.0659C58.6381 19.0704 58.3521 18.2593 57.7829 17.7744C57.2123 17.2895 56.2149 17.0458 54.7878 17.0458H54.0038V34.3863H48.0862V12.4267H54.8241C57.224 12.4267 59.1323 12.6459 60.5464 13.0843C61.9604 13.5228 62.989 14.2101 63.6307 15.145C64.2724 16.0812 64.5932 17.3308 64.5932 18.8937C64.5932 20.4566 64.1352 21.8558 63.2206 23.0873C62.3059 24.3188 61.0276 25.3144 59.3884 26.0726C60.4105 26.8786 61.3252 27.4937 62.1338 27.9205C62.9411 28.3474 63.7613 28.6672 64.5932 28.88L63.9153 34.5294C62.4896 34.5294 60.9267 33.9311 59.2267 32.7344H59.2254Z" fill="#433D63"/>
                <path d="M66.124 12.4267H80.063L79.9207 17.0458H71.9343V21.3103C72.8128 20.7184 73.9008 20.28 75.1959 19.995C76.4909 19.7113 77.7808 19.5682 79.0642 19.5682L78.9219 24.6851C77.1158 24.6851 75.6538 24.7856 74.5373 24.9868C73.4195 25.188 72.5527 25.562 71.9343 26.1061V29.7659H81.0967V34.385H66.1227V12.4267H66.124Z" fill="#433D63"/>
                <path d="M82.239 12.4267H96.1779L96.0356 17.0458H88.0492V21.3103C88.9277 20.7184 90.0157 20.28 91.3108 19.995C92.6058 19.7113 93.8957 19.5682 95.1791 19.5682L95.0368 24.6851C93.2307 24.6851 91.7688 24.7856 90.6522 24.9868C89.5344 25.188 88.6676 25.562 88.0492 26.1061V29.7659H97.2116V34.385H82.2377V12.4267H82.239Z" fill="#433D63"/>
                <path d="M99.1547 33.8541C98.6204 33.3331 98.3526 32.4924 98.3526 31.3318C98.3526 30.4562 98.632 29.7572 99.1909 29.235C99.7485 28.714 100.551 28.4535 101.597 28.4535C102.476 28.4535 103.183 28.714 103.719 29.235C104.253 29.756 104.521 30.598 104.521 31.7573C104.521 32.6574 104.26 33.3628 103.737 33.8722C103.215 34.3815 102.394 34.6356 101.278 34.6356C100.398 34.6356 99.6916 34.3751 99.156 33.8541H99.1547Z" fill="#8167FF"/>
                <path d="M112.007 34.3863H106.09V12.4267H112.007V34.3876V34.3863Z" fill="#433D63"/>
                <path d="M119.083 33.5868C117.454 32.8401 116.129 31.6267 115.107 29.9438C114.085 28.2622 113.574 26.0829 113.574 23.4058C113.574 21.0846 114.007 19.0652 114.875 17.3475C115.742 15.6299 116.973 14.3094 118.565 13.386C120.158 12.4614 122.023 11.9998 124.162 11.9998C126.087 11.9998 127.863 12.3673 129.492 13.1011C131.12 13.8361 132.445 15.0444 133.467 16.726C134.489 18.4088 135 20.5882 135 23.264C135 25.5864 134.566 27.611 133.698 29.3403C132.83 31.0696 131.595 32.3965 129.99 33.3198C128.386 34.2431 126.526 34.7061 124.412 34.7061C122.487 34.7061 120.709 34.3334 119.081 33.5868H119.083ZM127.835 27.8483C128.619 26.7818 129.011 25.313 129.011 23.4419C129.011 22.1627 128.839 21.0666 128.493 20.1549C128.148 19.2432 127.625 18.5326 126.925 18.0233C126.224 17.5139 125.351 17.2598 124.306 17.2598C122.713 17.2598 121.525 17.7924 120.74 18.8589C119.956 19.9253 119.564 21.3941 119.564 23.2652C119.564 25.1364 119.956 26.7238 120.74 27.8135C121.524 28.9031 122.701 29.4486 124.269 29.4486C125.837 29.4486 127.05 28.916 127.835 27.8496V27.8483Z" fill="#433D63"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_881_54802" x="0" y="0" width="151" height="54.8847" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_54802"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_54802" result="shape"/>
              </filter>
              <filter id="filter1_d_881_54802" x="8" y="7.99979" width="135" height="38.8847" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_54802"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_54802" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg  v-else width="151" height="55" viewBox="0 0 151 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_881_54827)">
              <rect x="8" y="4" width="135" height="38.8847" rx="19.4423" fill="#232326" shape-rendering="crispEdges"/>
              <rect x="8.5" y="4.5" width="134" height="37.8847" rx="18.9423" stroke="#35353F" shape-rendering="crispEdges"/>
              <g filter="url(#filter1_d_881_54827)">
                <path d="M26.7666 34.8844C24.6035 34.8844 22.7081 34.4047 21.0806 33.4453C19.4517 32.4859 18.1981 31.1473 17.3196 29.4297C16.4399 27.712 16 25.7403 16 23.5132C16 21.5944 16.3855 19.7761 17.1592 18.0585C17.9316 16.3408 19.149 14.9313 20.8128 13.8301C22.4765 12.7288 24.5556 12.1781 27.0513 12.1781C28.1212 12.1781 29.1303 12.2968 30.0813 12.5328L29.6181 17.6858C29.0954 17.5439 28.4886 17.473 27.8004 17.473C26.0408 17.473 24.6332 17.9772 23.5762 18.9831C22.5179 19.9902 21.9901 21.548 21.9901 23.6564C21.9901 25.5275 22.5011 26.9911 23.5232 28.0447C24.5453 29.0995 25.9477 29.6257 27.7305 29.6257C28.3955 29.6257 29.1083 29.5315 29.8691 29.3407L30.1537 34.4937C29.0359 34.7542 27.9077 34.8844 26.7666 34.8844Z" fill="#C0BCDF"/>
                <path d="M35.964 16.7969H30.6519V12.4267H47.0864V16.7969H41.7743V34.3863H35.9627V16.7969H35.964Z" fill="#C0BCDF"/>
                <path d="M59.2254 32.7344C57.5254 31.539 56.1062 30.1463 54.9651 28.5589V23.8327C56.1773 23.6431 57.092 23.2163 57.7104 22.5534C58.3289 21.8906 58.6381 21.0614 58.6381 20.0659C58.6381 19.0704 58.3521 18.2593 57.7829 17.7744C57.2123 17.2895 56.2149 17.0458 54.7878 17.0458H54.0038V34.3863H48.0862V12.4267H54.8241C57.224 12.4267 59.1323 12.6459 60.5464 13.0843C61.9604 13.5228 62.989 14.2101 63.6307 15.145C64.2724 16.0812 64.5932 17.3308 64.5932 18.8937C64.5932 20.4566 64.1352 21.8558 63.2206 23.0873C62.3059 24.3188 61.0276 25.3144 59.3884 26.0726C60.4105 26.8786 61.3252 27.4937 62.1338 27.9205C62.9411 28.3474 63.7613 28.6672 64.5932 28.88L63.9153 34.5294C62.4896 34.5294 60.9267 33.9311 59.2267 32.7344H59.2254Z" fill="#C0BCDF"/>
                <path d="M66.124 12.4267H80.063L79.9207 17.0458H71.9343V21.3103C72.8128 20.7184 73.9008 20.28 75.1959 19.995C76.4909 19.7113 77.7808 19.5682 79.0642 19.5682L78.9219 24.6851C77.1158 24.6851 75.6538 24.7856 74.5373 24.9868C73.4195 25.188 72.5527 25.562 71.9343 26.1061V29.7659H81.0967V34.385H66.1227V12.4267H66.124Z" fill="#C0BCDF"/>
                <path d="M82.239 12.4267H96.1779L96.0356 17.0458H88.0492V21.3103C88.9277 20.7184 90.0157 20.28 91.3108 19.995C92.6058 19.7113 93.8957 19.5682 95.1791 19.5682L95.0368 24.6851C93.2307 24.6851 91.7688 24.7856 90.6522 24.9868C89.5344 25.188 88.6676 25.562 88.0492 26.1061V29.7659H97.2116V34.385H82.2377V12.4267H82.239Z" fill="#C0BCDF"/>
                <path d="M99.1547 33.8541C98.6204 33.3331 98.3526 32.4924 98.3526 31.3318C98.3526 30.4562 98.632 29.7572 99.1909 29.235C99.7485 28.714 100.551 28.4535 101.597 28.4535C102.476 28.4535 103.183 28.714 103.719 29.235C104.253 29.756 104.521 30.598 104.521 31.7573C104.521 32.6574 104.26 33.3628 103.737 33.8722C103.215 34.3815 102.394 34.6356 101.278 34.6356C100.398 34.6356 99.6916 34.3751 99.156 33.8541H99.1547Z" fill="#4532C9"/>
                <path d="M112.007 34.3863H106.09V12.4267H112.007V34.3876V34.3863Z" fill="#C0BCDF"/>
                <path d="M119.083 33.5868C117.454 32.8401 116.129 31.6267 115.107 29.9438C114.085 28.2622 113.574 26.0829 113.574 23.4058C113.574 21.0846 114.007 19.0652 114.875 17.3475C115.742 15.6299 116.973 14.3094 118.565 13.386C120.158 12.4614 122.023 11.9998 124.162 11.9998C126.087 11.9998 127.863 12.3673 129.492 13.1011C131.12 13.8361 132.445 15.0444 133.467 16.726C134.489 18.4088 135 20.5882 135 23.264C135 25.5864 134.566 27.611 133.698 29.3403C132.83 31.0696 131.595 32.3965 129.99 33.3198C128.386 34.2431 126.526 34.7061 124.412 34.7061C122.487 34.7061 120.709 34.3334 119.081 33.5868H119.083ZM127.835 27.8483C128.619 26.7818 129.011 25.313 129.011 23.4419C129.011 22.1627 128.839 21.0666 128.493 20.1549C128.148 19.2432 127.625 18.5326 126.925 18.0233C126.224 17.5139 125.351 17.2598 124.306 17.2598C122.713 17.2598 121.525 17.7924 120.74 18.8589C119.956 19.9253 119.564 21.3941 119.564 23.2652C119.564 25.1364 119.956 26.7238 120.74 27.8135C121.524 28.9031 122.701 29.4486 124.269 29.4486C125.837 29.4486 127.05 28.916 127.835 27.8496V27.8483Z" fill="#C0BCDF"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_881_54827" x="0" y="0" width="151" height="54.8847" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_54827"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_54827" result="shape"/>
              </filter>
              <filter id="filter1_d_881_54827" x="8" y="7.99979" width="135" height="38.8847" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_54827"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_54827" result="shape"/>
              </filter>
            </defs>
          </svg>
        </template>
        <template v-else>
          <svg v-if="activeThemeName=='normal'" width="196" height="80" viewBox="0 0 196 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_281_2472)">
              <rect x="8" y="4" width="180" height="64" rx="24" fill="#DDE4F0" shape-rendering="crispEdges"/>
              <rect x="8.5" y="4.5" width="179" height="63" rx="23.5" stroke="#C6C2DA" shape-rendering="crispEdges"/>
              <g filter="url(#filter1_d_281_2472)">
                <path d="M34.2281 50.9731C31.3974 50.9731 28.9171 50.3454 26.7873 49.0899C24.6558 47.8344 23.0153 46.0828 21.8658 43.835C20.7145 41.5873 20.1389 39.0071 20.1389 36.0928C20.1389 33.5818 20.6434 31.2025 21.6558 28.9547C22.6666 26.707 24.2597 24.8626 26.4369 23.4214C28.6141 21.9803 31.3347 21.2598 34.6005 21.2598C36.0007 21.2598 37.3212 21.415 38.5656 21.7238L37.9595 28.467C37.2755 28.2814 36.4815 28.1886 35.5808 28.1886C33.2783 28.1886 31.4363 28.8484 30.0531 30.1647C28.6683 31.4826 27.9775 33.5211 27.9775 36.2801C27.9775 38.7287 28.6463 40.644 29.9837 42.0227C31.3212 43.403 33.1564 44.0915 35.4894 44.0915C36.3596 44.0915 37.2924 43.9683 38.2879 43.7186L38.6604 50.4618C37.1976 50.8027 35.7213 50.9731 34.2281 50.9731Z" fill="#433D63"/>
                <path d="M46.2635 27.3039H39.312V21.585H60.8182V27.3039H53.8668V50.3212H46.2618V27.3039H46.2635Z" fill="#433D63"/>
                <path d="M76.7037 48.1596C74.4791 46.5953 72.6219 44.7728 71.1287 42.6955V36.5108C72.715 36.2628 73.912 35.7042 74.7212 34.8368C75.5305 33.9695 75.9351 32.8844 75.9351 31.5817C75.9351 30.2789 75.5609 29.2175 74.816 28.583C74.0694 27.9485 72.7641 27.6296 70.8967 27.6296H69.8707V50.3212H62.127V21.585H70.9441C74.0846 21.585 76.5818 21.8718 78.4323 22.4456C80.2827 23.0193 81.6287 23.9188 82.4684 25.1422C83.3081 26.3673 83.728 28.0025 83.728 30.0477C83.728 32.093 83.1287 33.9239 81.9317 35.5354C80.7348 37.147 79.0621 38.4497 76.917 39.442C78.2545 40.4967 79.4515 41.3016 80.5096 41.8602C81.566 42.4187 82.6394 42.8372 83.728 43.1157L82.8409 50.5085C80.9752 50.5085 78.93 49.7256 76.7054 48.1596H76.7037Z" fill="#433D63"/>
                <path d="M85.7309 21.585H103.971L103.785 27.6296H93.3342V33.2101C94.4838 32.4355 95.9076 31.8618 97.6023 31.4888C99.297 31.1176 100.985 30.9303 102.664 30.9303L102.478 37.6262C100.115 37.6262 98.2016 37.7579 96.7405 38.0211C95.2778 38.2844 94.1435 38.7737 93.3342 39.4859V44.275H105.324V50.3195H85.7292V21.585H85.7309Z" fill="#433D63"/>
                <path d="M106.819 21.585H125.059L124.873 27.6296H114.422V33.2101C115.572 32.4355 116.996 31.8618 118.69 31.4888C120.385 31.1176 122.073 30.9303 123.752 30.9303L123.566 37.6262C121.203 37.6262 119.29 37.7579 117.829 38.0211C116.366 38.2844 115.232 38.7737 114.422 39.4859V44.275H126.412V50.3195H106.817V21.585H106.819Z" fill="#433D63"/>
                <path d="M128.955 49.6248C128.255 48.9431 127.905 47.8428 127.905 46.3241C127.905 45.1783 128.271 44.2637 129.002 43.5802C129.732 42.8985 130.781 42.5576 132.151 42.5576C133.301 42.5576 134.227 42.8985 134.928 43.5802C135.627 44.262 135.977 45.3639 135.977 46.881C135.977 48.0588 135.635 48.9819 134.951 49.6485C134.267 50.315 133.194 50.6474 131.733 50.6474C130.582 50.6474 129.657 50.3066 128.956 49.6248H128.955Z" fill="#8167FF"/>
                <path d="M145.773 50.3212H138.03V21.585H145.773V50.3229V50.3212Z" fill="#433D63"/>
                <path d="M155.032 49.275C152.901 48.2979 151.167 46.71 149.83 44.5078C148.492 42.3073 147.823 39.4555 147.823 35.9522C147.823 32.9147 148.391 30.2721 149.527 28.0244C150.661 25.7767 152.271 24.0487 154.355 22.8404C156.439 21.6305 158.88 21.0264 161.679 21.0264C164.198 21.0264 166.523 21.5073 168.654 22.4675C170.784 23.4294 172.518 25.0105 173.855 27.211C175.193 29.4132 175.861 32.2651 175.861 35.7666C175.861 38.8058 175.294 41.4551 174.158 43.7181C173.022 45.981 171.405 47.7174 169.306 48.9256C167.207 50.1339 164.772 50.7397 162.006 50.7397C159.487 50.7397 157.16 50.252 155.031 49.275H155.032ZM166.485 41.7656C167.511 40.3701 168.024 38.448 168.024 35.9995C168.024 34.3255 167.799 32.8911 167.347 31.6981C166.895 30.505 166.211 29.5752 165.295 28.9086C164.378 28.2421 163.235 27.9096 161.867 27.9096C159.783 27.9096 158.229 28.6066 157.201 30.0021C156.175 31.3977 155.662 33.3197 155.662 35.7683C155.662 38.2168 156.175 40.2941 157.201 41.7201C158.227 43.146 159.768 43.8598 161.82 43.8598C163.871 43.8598 165.458 43.1629 166.485 41.7673V41.7656Z" fill="#433D63"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_281_2472" x="0" y="0" width="196" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_2472"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_2472" result="shape"/>
              </filter>
              <filter id="filter1_d_281_2472" x="12.1389" y="17.0264" width="171.722" height="45.9463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_2472"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_2472" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg v-else width="196" height="80" viewBox="0 0 196 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_880_53292)">
              <rect x="8" y="4" width="180" height="64" rx="24" fill="#232326" shape-rendering="crispEdges"/>
              <rect x="8.5" y="4.5" width="179" height="63" rx="23.5" stroke="#35353F" shape-rendering="crispEdges"/>
              <g filter="url(#filter1_d_880_53292)">
                <path d="M34.2281 50.9731C31.3974 50.9731 28.9171 50.3454 26.7873 49.0899C24.6558 47.8344 23.0153 46.0828 21.8658 43.835C20.7145 41.5873 20.1389 39.0071 20.1389 36.0928C20.1389 33.5818 20.6434 31.2025 21.6558 28.9547C22.6666 26.707 24.2597 24.8626 26.4369 23.4214C28.6141 21.9803 31.3347 21.2598 34.6005 21.2598C36.0007 21.2598 37.3212 21.415 38.5656 21.7238L37.9595 28.467C37.2755 28.2814 36.4815 28.1886 35.5808 28.1886C33.2783 28.1886 31.4363 28.8484 30.0531 30.1647C28.6683 31.4826 27.9775 33.5211 27.9775 36.2801C27.9775 38.7287 28.6463 40.644 29.9837 42.0227C31.3212 43.403 33.1564 44.0915 35.4894 44.0915C36.3596 44.0915 37.2924 43.9683 38.2879 43.7186L38.6604 50.4618C37.1976 50.8027 35.7213 50.9731 34.2281 50.9731Z" fill="#C0BCDF"/>
                <path d="M46.2635 27.3039H39.312V21.585H60.8182V27.3039H53.8668V50.3212H46.2618V27.3039H46.2635Z" fill="#C0BCDF"/>
                <path d="M76.7037 48.1596C74.4791 46.5953 72.6219 44.7728 71.1287 42.6955V36.5108C72.715 36.2628 73.912 35.7042 74.7212 34.8368C75.5305 33.9695 75.9351 32.8844 75.9351 31.5817C75.9351 30.2789 75.5609 29.2175 74.816 28.583C74.0694 27.9485 72.7641 27.6296 70.8967 27.6296H69.8707V50.3212H62.127V21.585H70.9441C74.0846 21.585 76.5818 21.8718 78.4323 22.4456C80.2827 23.0193 81.6287 23.9188 82.4684 25.1422C83.3081 26.3673 83.728 28.0025 83.728 30.0477C83.728 32.093 83.1287 33.9239 81.9317 35.5354C80.7348 37.147 79.0621 38.4497 76.917 39.442C78.2545 40.4967 79.4515 41.3016 80.5096 41.8602C81.566 42.4187 82.6394 42.8372 83.728 43.1157L82.8409 50.5085C80.9752 50.5085 78.93 49.7256 76.7054 48.1596H76.7037Z" fill="#C0BCDF"/>
                <path d="M85.7309 21.585H103.971L103.785 27.6296H93.3342V33.2101C94.4838 32.4355 95.9076 31.8618 97.6023 31.4888C99.297 31.1176 100.985 30.9303 102.664 30.9303L102.478 37.6262C100.115 37.6262 98.2016 37.7579 96.7405 38.0211C95.2778 38.2844 94.1435 38.7737 93.3342 39.4859V44.275H105.324V50.3195H85.7292V21.585H85.7309Z" fill="#C0BCDF"/>
                <path d="M106.819 21.585H125.059L124.873 27.6296H114.422V33.2101C115.572 32.4355 116.996 31.8618 118.69 31.4888C120.385 31.1176 122.073 30.9303 123.752 30.9303L123.566 37.6262C121.203 37.6262 119.29 37.7579 117.829 38.0211C116.366 38.2844 115.232 38.7737 114.422 39.4859V44.275H126.412V50.3195H106.817V21.585H106.819Z" fill="#C0BCDF"/>
                <path d="M128.955 49.6248C128.255 48.9431 127.905 47.8428 127.905 46.3241C127.905 45.1783 128.271 44.2637 129.002 43.5802C129.732 42.8985 130.781 42.5576 132.151 42.5576C133.301 42.5576 134.227 42.8985 134.928 43.5802C135.627 44.262 135.977 45.3639 135.977 46.881C135.977 48.0588 135.635 48.9819 134.951 49.6485C134.267 50.315 133.194 50.6474 131.733 50.6474C130.582 50.6474 129.657 50.3066 128.956 49.6248H128.955Z" fill="#4532C9"/>
                <path d="M145.773 50.3212H138.03V21.585H145.773V50.3229V50.3212Z" fill="#C0BCDF"/>
                <path d="M155.032 49.275C152.901 48.2979 151.167 46.71 149.83 44.5078C148.492 42.3073 147.823 39.4555 147.823 35.9522C147.823 32.9147 148.391 30.2721 149.527 28.0244C150.661 25.7767 152.271 24.0487 154.355 22.8404C156.439 21.6305 158.88 21.0264 161.679 21.0264C164.198 21.0264 166.523 21.5073 168.654 22.4675C170.784 23.4294 172.518 25.0105 173.855 27.211C175.193 29.4132 175.861 32.2651 175.861 35.7666C175.861 38.8058 175.294 41.4551 174.158 43.7181C173.022 45.981 171.405 47.7174 169.306 48.9256C167.207 50.1339 164.772 50.7397 162.006 50.7397C159.487 50.7397 157.16 50.252 155.031 49.275H155.032ZM166.485 41.7656C167.511 40.3701 168.024 38.448 168.024 35.9995C168.024 34.3255 167.799 32.8911 167.347 31.6981C166.895 30.505 166.211 29.5752 165.295 28.9086C164.378 28.2421 163.235 27.9096 161.867 27.9096C159.783 27.9096 158.229 28.6066 157.201 30.0021C156.175 31.3977 155.662 33.3197 155.662 35.7683C155.662 38.2168 156.175 40.2941 157.201 41.7201C158.227 43.146 159.768 43.8598 161.82 43.8598C163.871 43.8598 165.458 43.1629 166.485 41.7673V41.7656Z" fill="#C0BCDF"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_880_53292" x="0" y="0" width="196" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_880_53292"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_880_53292" result="shape"/>
              </filter>
              <filter id="filter1_d_880_53292" x="12.1389" y="17.0264" width="171.722" height="45.9463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_880_53292"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_880_53292" result="shape"/>
              </filter>
            </defs>
          </svg>
        </template>
        <span>精心构建</span>
      </p>
    </div>
    <p class="p1">已有超过 1000 个经过 SEO 优化的目录网站是使用 Ctree 创建的。</p>
    <div class="case-box">
      <div class="case-box-item" v-for="(item,index) in 9" :key="index">
        <img class="bg" src="@@/assets/images/defaultPages/case/bg.png" alt="">
        <div class="bottom-view">

          <img class="header" src="@@/assets/images/defaultPages/case/Frame_31.png" alt="">
          <p class="title">Best Model Context Protocol servers directory</p>
          <p class="p2">⚡️ The biggest collection of MCP servers</p>

          <button class="startNow">
            <img src="@@/assets/images/defaultPages/case/cursor.png" alt="">
            <span>查看导航站</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .case-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    .top-view{
      display: flex;
      align-items: center;
      justify-content: center;

      .logleft{
        width: 196px;
        height: 80px;
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        gap: 10px;
        flex-shrink: 0;
        padding: 16px;
        border-radius: 24px;
        border: 1px solid var(--Stroke-default, #c6c2da);
        box-sizing: border-box;
        background: var(--Bg-3, #dde4f0);
        box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
      }
      .title{
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0 1000";
          font-size: 36px;
          &:nth-child(2){
            color: var(--app-h2-text-Dark-color);
          }
        }
      }
    }
    .p1{
      color:var(--app-module-box-p1);
      font-family: "Smiley Sans";
      font-weight: 400;
      font-size: 14px;
      margin-bottom:55px;
      padding:0 !important;
    }

    .case-box{
      display: grid;
      gap:24px;
      grid-template-columns: repeat(1, 1fr);
      width:100%;
      margin-bottom:55px;
      .case-box-item{
        height: 421px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        border-radius: 24px;
        border: 0.5px solid var(--app-border-color);
        box-sizing: border-box;

        position: relative;
        &:hover{
          box-shadow: 0px 4px 8px #a7a0d33b;
        }
        .bg{
          width:100%;
        }
        .bottom-view{
          padding:24px;
          padding-top:0;
          box-sizing: border-box;

          flex:1;
          position: relative;
          .header{
            width: 48px;
            height: 48px;
            border-radius: 20px;
            border: 1px solid var(--Stroke-default, #c6c2da);
            box-sizing: border-box;
            margin-left:24px;
            margin-bottom:8px;
            margin-top:-24px;
          }
          .title{
            color: var(--app-h2-text-Light-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            margin-bottom:8px;
          }
          .p2{
            color: var(--app-header-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            padding:0 !important;
          }
          .startNow{
            position: absolute;
            bottom:0;
            left:24px;
            height: 48px;
            display: flex;
            place-content: center;
            place-items: center;
            gap: 8px;
            flex-shrink: 0;
            padding: 12px 24px;
            border-radius: 12px;
            background: var(--app-purpleButton-bg-color);
            box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
            border:0;
            margin-bottom:16px;
            &:hover{
              box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
            }
            img{
              width: 20px;
              height: 20px;
            }
            span{
              color: #e2e2ff;
              font-family: "Alibaba PuHuiTi 2.0";
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }

    }
  }

  @media (min-width: 1000px) {
    .case-box {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (min-width: 700px) and (max-width: 999px) {
    .case-box {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  @media (max-width: 1000px)  {
    .top-view{
      .title{
        margin-bottom:16px !important;
        span{
          font-size:24px !important;
        }
      }
    }
    .p1{
      max-width: 269px;
      margin-bottom:16px !important;
    }
  }
</style>