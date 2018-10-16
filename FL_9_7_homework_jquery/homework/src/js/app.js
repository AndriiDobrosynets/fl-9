const $photoItes = $('.photo-items');
const $modal = $('.overlay');
const $postClose = $('.post-close');
const $arrowPrev = $('.prev');
const $arrowNext = $('.next');


const LOAD_BY_DEFAULT = 12;
let loaded = LOAD_BY_DEFAULT;


let liIndex;
let targetImg;


const $btn = $('<a href="#">Show more</a>');

function createPost(post) {
  const newPost = `
  <li class="photo-item">
  <a href="#">
    <img class="img-cover" src=${post.display_url}   alt="">
  </a>
  <div class="likes-coments">
    <span class="likes">${post.edge_liked_by.count}</span>
    <span class="coments">${post.edge_media_to_comment.count}</span>
  </div>
  </li>
  `;
  return newPost;
}

$.ajax({
  url: 'data/media.json',
  type: 'GET',
  success: main,
  error: function (e) {
    console.error(e);
  }
});



function markTags(str) {
  let arr = str.split(' ');
  arr = arr.map(word => {
    if (word.charAt(0) === '#' || word.charAt(0) === '@') {
      return `<a href='#'>${word}</a>`;
    }
    return word;
  });
  return arr.join(' ');
}


function showPosts(posts) {
  posts.forEach(post => {
    $photoItes.append(createPost(post));
  });
}

function main(data) {
  const imgItems = data.media.slice(0, loaded);
  showPosts(imgItems);
  $('.container').append($btn);
  const $lis = $('.photo-item');
  $lis.on('click', function () {
    liIndex = $(this).index();
    showModal(liIndex, imgItems);
  });
  $arrowNext.on('click', function () {
    if (liIndex + 1 < $lis.length) {
      liIndex++;
      showModal(liIndex, imgItems);
    }
  });
  $arrowPrev.on('click', function () {
    if (liIndex > 0) {
      liIndex--;
      showModal(liIndex, imgItems);
    }
  });
}


function showModal(index, arr) {
  targetImg = arr[index].display_url;
  $modal.find('.post-img img').attr('src', targetImg);
  $modal.fadeIn();
  $modal.find('.post-likes').text(arr[index].edge_liked_by.count + ' Likes');
  $modal.find('.tags').html(markTags(arr[index].edge_media_to_caption));
  $modal.find('.location').text(arr[index].location);
  $postClose.on('click', function () {
    $modal.fadeOut();
  });
}