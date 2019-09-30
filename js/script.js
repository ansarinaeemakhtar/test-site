const modal         = document.getElementById("modal"),
      bgoverlay     = document.getElementById("bgoverlay"),
      textRecipe    = document.getElementById("text-recipes"),
      videoRecipe   = document.getElementById("video-recipes"),
      links         = document.querySelectorAll("a"),
      btnClose      = document.getElementsByClassName("close")[0],
      popupHeader   = document.getElementById("popupHeader"),
      popupContent  = document.getElementById("popupContent"),
      btnTop = document.getElementById("myBtn"),
      recipes       = [
        { "id": 1, "recipename": "Butter Chicken", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
        { "id": 2, "recipename": "Roghan Josh", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
        { "id": 3, "recipename": "Tandoori Chicken", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
        { "id": 4, "recipename": "Paneer Tikka Masala", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
        { "id": 5, "recipename": "Tandoori Chicken", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
        { "id": 6, "recipename": "Aaal Gobhi", "recipe": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in. Sodales neque sodales ut etiam sit. Est placerat in egestas erat imperdiet sed euismod.</p><p>Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Nibh tellus molestie nunc non blandit massa. Nec dui nunc mattis enim ut tellus elementum. Nibh cras pulvinar mattis nunc sed blandit libero. Non nisi est sit amet. Lobortis feugiat vivamus at augue eget arcu. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae.</p><p>Turpis egestas integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque. Gravida quis blandit turpis cursus in hac.</p>" },
      ],
      vidRecipes = [
        { "id": 1, "recipename": "Butter Chicken", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/VKvwWeVy8Nw' frameborder='0' allowfullscreen></iframe></div>" },
        { "id": 2, "recipename": "Chicken Fry", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/r9zhwXqSJZU' frameborder='0' allowfullscreen></iframe></div>" },
        { "id": 3, "recipename": "Tandoori Chicken", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/Vb6zHYtoYZQ' frameborder='0' allowfullscreen></iframe></div>" },
        { "id": 4, "recipename": "Bihari Chicken", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/WmanWRVxJeg' frameborder='0' allowfullscreen></iframe></div>" },
        { "id": 5, "recipename": "Prawns Gravy", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/AxgOxwV8mGY' frameborder='0' allowfullscreen></iframe></div>" },
        { "id": 6, "recipename": "Tasty Chicken Fry", "url": "<div class='embed-container'><iframe src='https://www.youtube.com/embed/gnHKLZmQv8c' frameborder='0' allowfullscreen></iframe></div>" },
      ];

//      checking each anchor event to show the content accordingly
for (let i = 0; i < links.length; i++) {
  link = links[i];
  link.addEventListener("click", function () {
    modal.style.display = "block";
    bgoverlay.style.display = "block";

    let parentElm = this.parentNode.parentNode.parentNode.id;
    if (parentElm == "text-recipes") { 
      let recipe_id = this.id.split("-");
      recipe_id = recipe_id[1];
      showRecipe(recipe_id)
    }
    else if (parentElm == "video-recipes") {
      let recipe_id = this.id.split("-");
      recipe_id = recipe_id[2];
      showVidRecipe(recipe_id)
    }

    scrollWin();
  });
}

//  function to show the text recipes in the popup
function showRecipe(id) {
  let index = Number(id-1);
  popupHeader.innerText = recipes[index].recipename;
  popupContent.innerHTML = recipes[index].recipe;
}

//  function to show the videos in the popup
function showVidRecipe(id) {
  let index = Number(id-1);
  popupHeader.innerText = vidRecipes[index].recipename;
  popupContent.innerHTML = vidRecipes[index].url;
}

//  to show the background light black to indicate that the background has been deactived for a while
bgoverlay.addEventListener("click", function () {
  this.style.display == "block" ? this.style.display = "none" : this.style.display = "block";
  modal.style.display == "block" ? modal.style.display = "none" : modal.style.display = "block";
  scrollWin();
})

//  Added event on the close button of the popup
btnClose.addEventListener("click", function () {
  modal.style.display = "none";
  bgoverlay.style.display = "none";
})

//  to scroll up the window smoothly
function scrollWin() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

//  Get the click from the top button
btnTop.addEventListener("click", function () {
  scrollWin();
});

// When the user scrolls down 120px from the top of the document, Top button will be visible to the user
window.onscroll = function() { scrollFunction() };

//  to find out how much user have scrolled, if > 120 the button show, otherwise hide
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
