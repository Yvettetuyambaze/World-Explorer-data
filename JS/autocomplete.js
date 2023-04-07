 // Added autocomplete functionality to the city and country inputs
 $(function () {
    // some countries
    const citiesAndCountries = [
      { label: "Paris, France", value: { city: "Paris", country: "France" } },
      { label: "London, United Kingdom", value: { city: "London", country: "United Kingdom" } },
      { label: "New York, United States", value: { city: "New York", country: "United States" } },
      { label: "Amsterdam, Netherlands", value: { city: "Amsterdam", country: "Netherlands" } },
      { label: "Barcelona, Spain", value: { city: "Barcelona", country: "Spain" } },
      { label: "Cairo, Egypt", value: { city: "Cairo", country: "Egypt" } },
      { label: "Dubai, United Arab Emirates", value: { city: "Dubai", country: "United Arab Emirates" } },
      { label: "Edinburgh, United Kingdom", value: { city: "Edinburgh", country: "United Kingdom" } },
      { label: "Florence, Italy", value: { city: "Florence", country: "Italy" } },
      { label: "Guangzhou, China", value: { city: "Guangzhou", country: "China" } },
      { label: "Helsinki, Finland", value: { city: "Helsinki", country: "Finland" } },
      { label: "Istanbul, Turkey", value: { city: "Istanbul", country: "Turkey" } },
      { label: "Jakarta, Indonesia", value: { city: "Jakarta", country: "Indonesia" } },
      { label: "Kyoto, Japan", value: { city: "Kyoto", country: "Japan" } },
      { label: "Lisbon, Portugal", value: { city: "Lisbon", country: "Portugal" } },
      { label: "Madrid, Spain", value: { city: "Madrid", country: "Spain" } },
      { label: "Nairobi, Kenya", value: { city: "Nairobi", country: "Kenya" } },
      { label: "Oslo, Norway", value: { city: "Oslo", country: "Norway" } },
      { label: "Prague, Czech Republic", value: { city: "Prague", country: "Czech Republic" } },
      { label: "Quito, Ecuador", value: { city: "Quito", country: "Ecuador" } },
      { label: "Rome, Italy", value: { city: "Rome", country: "Italy" } },
      { label: "Stockholm, Sweden", value: { city: "Stockholm", country: "Sweden" } },
      { label: "Toronto, Canada", value: { city: "Toronto", country: "Canada" } },
      { label: "Ulaanbaatar, Mongolia", value: { city: "Ulaanbaatar", country: "Mongolia" } },
      { label: "Vienna, Austria", value: { city: "Vienna", country: "Austria" } },
      { label: "Warsaw, Poland", value: { city: "Warsaw", country: "Poland" } },
      { label: "Xiamen, China", value: { city: "Xiamen", country: "China" } },
      { label: "Yerevan, Armenia", value: { city: "Yerevan", country: "Armenia" } },
      { label: "Zagreb, Croatia", value: { city: "Zagreb", country: "Croatia" } },
  
    ];
  
    function selectCityAndCountry(inputId, cityId, countryId) {
      $(inputId).autocomplete({
        minLength: 2,
        source: citiesAndCountries,
        focus: function (event, ui) {
          $(inputId).val(ui.item.label);
          return false;
        },
        select: function (event, ui) {
          $(inputId).val(ui.item.label);
          $(cityId).val(ui.item.value.city);
          $(countryId).val(ui.item.value.country);
          return false;
        }
      });
    }
  
    selectCityAndCountry("#city_name", "#city_name", "#country_name");
    selectCityAndCountry("#city_name2", "#city_name2", "#country_name2");
  });

      