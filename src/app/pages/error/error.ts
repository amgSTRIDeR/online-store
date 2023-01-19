import { PageComponent } from '../../core/components/page.component';

export const errorPage = new PageComponent({
    template: `<section class="not_found">
    <div class="not_found__content">
        <p class="not_found__content__info">
            Спасаясь от гоблинов в какой то момент вы поняли что потерялись. Попытка найти выход из
            этих бесконечных коридоров не увенчалась успехом.
        </p>
        <p class="not_found__content__info">
            Всюду на стенах вы видите странные надписи <span class="elf-writing">404</span>. Вас не покидет стойкое ощущение что
            всего этого не существует.
        </p>
        <p class="not_found__content__small_text">
            Данной страницы не существет, но вы можете использоть свиток телепортации что бы
            вернуться на главную.
        </p>
<div class="scroll-image"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M654.208 622.592a168.594286 168.594286 0 0 1 129.097143-65.152l-117.942857-92.16c-53.833143-30.006857-123.611429-14.006857-164.114286 37.814857-41.069714 52.589714-36.717714 125.714286 7.68 170.550857a124.708571 124.708571 0 0 0 13.202286 11.739429l100.077714 78.208a168.630857 168.630857 0 0 1 32-141.001143zM169.563429 409.929143l94.902857 74.148571c-8.868571-45.988571 2.633143-96 35.584-138.185143 33.773714-43.190857 78.262857-67.145143 123.885714-69.211428l-93.293714-72.886857c-55.168-43.117714-135.954286-31.908571-180.443429 25.033143-44.470857 56.923429-35.803429 138.020571 19.382857 181.12z m268.982857 201.088a168.667429 168.667429 0 0 1 33.901714-130.450286c31.963429-40.923429 78.336-64.073143 125.44-66.779428L502.857143 339.620571c-56.283429-43.958857-126.025143-32.603429-174.006857 28.8-41.307429 52.845714-40.411429 119.277714-1.28 164.992l34.779428 27.172572c-15.670857-51.309714-6.473143-109.915429 29.677715-156.196572a174.555429 174.555429 0 0 1 46.390857-41.508571 18.285714 18.285714 0 0 1 19.108571 31.177143 138.313143 138.313143 0 0 0-36.681143 32.859428c-45.257143 57.910857-36.992 139.739429 17.664 184.100572z m52.333714 96.365714a36.571429 36.571429 0 0 1-9.581714 8.996572l-182.857143 118.857142a36.571429 36.571429 0 0 1-55.771429-23.497142l-13.293714-66.395429-84.498286-13.184c-33.700571-5.266286-42.496-49.737143-13.330285-67.419429l171.574857-104.045714-0.036572-0.018286-156.032-121.910857c-71.296-55.698286-82.432-159.817143-25.673143-232.466285 56.758857-72.649143 160.475429-87.04 231.771429-31.323429l532.845714 416.274286c71.277714 55.716571 82.413714 159.817143 25.654857 232.484571-56.758857 72.649143-160.475429 87.04-231.771428 31.323429l-189.001143-147.675429z m-106.916571-82.486857L333.366857 585.142857l-182.857143 110.884572 109.714286 17.115428 18.285714 91.428572 182.857143-118.857143-46.628571-36.644572-71.954286 43.172572a18.285714 18.285714 0 1 1-18.834286-31.341715l60.013715-36.022857z m316.544 1.792c-6.272 5.485714-12.123429 11.666286-17.462858 18.468571-44.470857 56.941714-35.803429 138.057143 19.382858 181.156572 8.356571 6.528 17.334857 11.830857 26.697142 15.908571-48.347429-43.209143-60.891429-104.777143-23.954285-152.100571 10.313143-13.202286 25.307429-22.436571 41.709714-27.245714l-46.372571-36.205715z m32.512-21.028571l88.045714 68.790857a18.285714 18.285714 0 0 1-22.528 28.818285c-16.914286-13.202286-50.56-8.539429-64.548572 9.362286-25.307429 32.402286-14.445714 76.16 26.404572 108.105143 27.154286 21.211429 63.506286 23.277714 93.312 8.192a134.272 134.272 0 0 0 29.147428-27.648c44.489143-56.923429 35.84-138.020571-19.364571-181.12-38.070857-29.750857-88.32-33.645714-130.468571-14.482286z" fill="#000000" /><path d="M654.208 622.592a168.630857 168.630857 0 0 0-32 140.982857l-100.096-78.171428 0.018286-0.018286a124.708571 124.708571 0 0 1-13.220572-11.739429c-44.379429-44.836571-48.731429-117.961143-7.661714-170.550857 40.502857-51.821714 110.281143-67.84 164.096-37.814857l117.942857 92.16a168.594286 168.594286 0 0 0-129.078857 65.152zM169.563429 409.929143c-55.168-43.081143-63.817143-124.178286-19.364572-181.101714 44.489143-56.941714 125.275429-68.150857 180.443429-25.051429l93.293714 72.905143c-45.622857 2.066286-90.112 26.020571-123.885714 69.211428-32.950857 42.203429-44.434286 92.196571-35.602286 138.185143l-94.884571-74.130285z m268.982857 201.088c-54.674286-44.361143-62.939429-126.189714-17.682286-184.100572a138.313143 138.313143 0 0 1 36.681143-32.859428 18.285714 18.285714 0 1 0-19.108572-31.177143 174.555429 174.555429 0 0 0-46.390857 41.508571c-36.150857 46.262857-45.348571 104.886857-29.677714 156.196572l-34.779429-27.172572c-39.131429-45.714286-40.027429-112.128 1.28-164.992 47.981714-61.403429 117.723429-72.777143 174.006858-28.8l94.994285 74.166858c-47.085714 2.706286-93.44 25.856-125.421714 66.779428a168.667429 168.667429 0 0 0-33.92 130.450286z m-54.582857 13.878857l-59.995429 36.004571a18.285714 18.285714 0 1 0 18.816 31.341715l71.954286-43.154286 46.628571 36.626286-182.857143 118.857143-18.285714-91.428572-109.714286-17.115428 182.857143-110.884572 50.596572 39.753143z m316.544 1.792l46.372571 36.205714c-16.402286 4.790857-31.396571 14.025143-41.691429 27.227429-36.973714 47.323429-24.411429 108.891429 23.917715 152.100571a124.251429 124.251429 0 0 1-26.697143-15.908571c-55.168-43.099429-63.817143-124.214857-19.364572-181.138286 5.339429-6.820571 11.190857-13.001143 17.462858-18.486857z m32.512-21.028571c42.130286-19.145143 92.397714-15.250286 130.468571 14.500571 55.186286 43.099429 63.853714 124.196571 19.382857 181.12a134.272 134.272 0 0 1-29.165714 27.648c-29.805714 15.085714-66.157714 13.019429-93.312-8.192-40.868571-31.945143-51.712-75.702857-26.404572-108.105143 13.988571-17.92 47.634286-22.564571 64.548572-9.362286a18.285714 18.285714 0 1 0 22.528-28.818285l-88.045714-68.772572z" /></svg></div>
    </div>
</section>`,
    selector: '.main-section',
});
