import GetTags from './GetTags'
import BaseCarousel from '../BaseCarousel'
import ArticleInfo from './ArticleInfo'
import ArticleBreadcrumbs from './ArticleBreadcrumbs'
import EditRemoveButton from '../EditRemoveButton'
import ReviewSection from '../review/ReviewSection'
// import StarRating from "../components/review/-StarRating"

function ArticleContainer({ article }) {
  return (
    <div className="container">
      {/* <StarRating /> */}
      <div className="mb-4 mt-2">
        <ArticleBreadcrumbs />
      </div>
      <div className="page-title">
        <EditRemoveButton
          editTo={'/articleForm'}
          deleteToSucces={'/articles'}
          stateInfo={article}
        />
        <div className="row">
          <h3 style={{ fontFamily: 'Lora' }} className="card-title ms-1  mt-3 mb-0 text-center">
            {article.name}
          </h3>
          <div className="text-end mt-2 mb-3">
            <GetTags tags={article.tags} />
          </div>
          <BaseCarousel images={article.images} />
          <div className="rounded-pill ms-auto text-end mt-3 mb-1">
            <ArticleInfo dateOfEntry={article.dateOfEntry} timeRead={article.timeRead} />
          </div>
          <div>
            <p>
              {article.description} <br />
              Какъв е модерният свят по отношение на храната? По-голямата част е заета от реклами на
              лъскави опаковки с полуфабрикати, прием на прекалено големи количества реално ненужна
              храна, а за съжаление пълноценните продукти като че ли заемат по-малко място в
              супермаркетите.
              <br />
              В модерния свят става все по-трудно човек да отговори на въпроса „защо ям“ и това се
              дължи на факта, че често се яде неосъзнато и повече от необходимото, при това основно
              с продукти, които не засищат организма и даже го карат да иска още. Много хора са
              притъпили естествените сигнали на тялото за глад и ситост, давайки му по много от
              всичко и ядейки без да са истински гладни.
              <br />
              От друга страна пък стои недояждането, когато даден индивид намалява прекалено много
              калориите в стремежа да се впише в даден идеал („манекенско тяло“) и да свали
              излишните килограми възможно по-бързо. Но „по-малко означава по-добре“ не важи при
              всички случаи и в света на спазването на режими това се отразява в йо-йо ефект и
              връщане на свалените килограми с лихвите.
              <br />
              Има ли златна среда? Има ли начин, с който хем да се научим отново да слушаме
              естествените сигнали на тялото си, хем да не преяждаме, хем да сме сити?
            </p>
          </div>
        </div>
      </div>
      <div>
        <ReviewSection reviews={article.reviews} />
      </div>
    </div>
  )
}

export default ArticleContainer
