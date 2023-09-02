

  window.addEventListener('DOMContentLoaded', function() {

    document.body.style.backgroundImage = "linear-gradient(to right, #1d4350, #a43931)";

   
    var pricingContainer = document.querySelector('.pricing-container');


    pricingContainer.style.display = 'flex';
    pricingContainer.style.justifyContent = 'center';
    pricingContainer.style.gap = '30px';
    pricingContainer.style.maxWidth = '900px';
    pricingContainer.style.margin = '0 auto';

   
    var pricingPlans = document.querySelectorAll('.pricing-plan');

   
    pricingPlans.forEach(function(plan) {
     
      plan.style.display = 'flex';
      plan.style.flexDirection = 'column';
      plan.style.borderRadius = '20px';
      plan.style.overflow = 'hidden';
      plan.style.flex = '1';
      plan.style.backgroundColor = 'aliceblue';
      plan.style.maxWidth = '300px';
      plan.style.margin = '0 auto';

     
      var planContainer = plan.querySelector('.plan-container');

   
      planContainer.style.background = 'linear-gradient(to right, #114357, #f29492)';
      planContainer.style.display = 'flex';
      planContainer.style.flexDirection = 'column';
      planContainer.style.alignItems = 'center';

      
      var planTitle = plan.querySelector('.plan-title');

 
      planTitle.style.fontFamily = "'IBM Plex Sans', sans-serif";
      planTitle.style.textAlign = 'center';
      planTitle.style.fontSize = '2rem';
      planTitle.style.textTransform = 'uppercase';
      planTitle.style.fontWeight = '100';


      var planPrice = plan.querySelector('.plan-price');

      planPrice.style.flexWrap = 'wrap';
      planPrice.style.display = 'flex';
      planPrice.style.justifyContent = 'center';
      planPrice.style.alignItems = 'center';
      planPrice.style.fontFamily = "'Roboto', sans-serif";
      planPrice.style.fontFamily = "'Roboto Slab', serif";
      planPrice.style.textAlign = 'center';
      planPrice.style.fontSize = '1rem';
      planPrice.style.fontWeight = 'bolder';
      planPrice.style.margin = '2px';

      var planDescription = plan.querySelector('.plan-description');

      
      planDescription.style.width = '70%';
      planDescription.style.textAlign = 'center';
      planDescription.style.margin = '2px';
      planDescription.style.color = 'aliceblue';
      planDescription.style.fontFamily = "'Roboto Slab', serif";

      
      var horizontalLines = plan.querySelectorAll('hr');

     
      horizontalLines.forEach(function(hr) {
        hr.style.width = '70%';
        hr.style.margin = '2px';
        hr.style.border = 'none';
        hr.style.borderTop = '2px solid white';
      });

     
      var priceHr = plan.querySelector('.price-hr');

     
      priceHr.style.margin = '0';
      priceHr.style.width = '70%';
      priceHr.style.margin = '10px';
      priceHr.style.border = 'none';
      priceHr.style.borderTop = '2px solid slategray';

      
      var planFeatures = plan.querySelector('.plan-features');

      
      planFeatures.style.display = 'flex';
      planFeatures.style.flexDirection = 'column';
      planFeatures.style.alignItems = 'flex-start';
      planFeatures.style.paddingLeft = '20px';


      var featureItems = planFeatures.querySelectorAll('li');

      
      featureItems.forEach(function(item) {
        item.style.marginBottom = '10px';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
      });


      var featureIcons = planFeatures.querySelectorAll('i');

      
      featureIcons.forEach(function(icon) {
        icon.style.color = '#DD5E89';
        icon.style.marginRight = '5px';
      });


      var buttonContainer = plan.querySelector('.plan-button-container');

     
      buttonContainer.style.display = 'flex';
      buttonContainer.style.justifyContent = 'center';
      buttonContainer.style.marginTop = '20px';

    
      var planButton = plan.querySelector('.plan-button');

      planButton.style.backgroundColor = '#DD5E89';
      planButton.style.color = 'white';
      planButton.style.fontFamily = "'Sono', sans-serif";
      planButton.style.fontSize = '1.1rem';
      planButton.style.fontWeight = 'bold';
      planButton.style.border = 'none';
      planButton.style.padding = '10px 20px';
      planButton.style.borderRadius = '30px';
      planButton.style.cursor = 'pointer';
    });
  });

