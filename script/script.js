const imageThumbnail = Vue.component('image-thumbnail', {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    template: `
        <div
          class="img-box"
          :style="{ backgroundImage: 'url(' + path + ')' }"
          @click="$emit('clickimage')"
          ></div>`
});

const modal = Vue.component('modal',{ //モーダルのコンポーネントの宣言
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ''
        }
    },
    template: `
        <div
          v-if="isShown"
          class="modal"
          @click="$emit('close')"
          >
            <img
              class="modal-img"
              :src="imagePath"
              alt="selectedImage"
            />
        </div>`
});

const app = new Vue({
    el: '#app',
    //コンポーネントを返す
    components: {
        'image-thumbnail': imageThumbnail,
        modal
    },
    //画像のパスの表示
    data(){
        return{
            isShown: false,
            selectedImage: '',
            images: [{
                path: './img/cought_W_new_comp.png',
            },{
                path: './img/cought_W_M_.png',
            },{
                path: './img/cought_W_ver_2_M.png',
            },{
                path: './img/IMG_0420.jpeg',
            },{
                path: './img/131F727C-CA16-4B22-B82C-61AE75BE8702.jpg',
            },{
                path: './img/IMG_2479.JPG',
            },{
                path: './img/IMG_0365.jpeg',
            },{
                path: './img/IMG_6446.jpg',
            },{
                path: './img/IMG_2531.JPG',
            }]
        };
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal() {
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
});