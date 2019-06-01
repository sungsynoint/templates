# templates
      const container = document.querySelectorAll(".group1");
      let result = false;
      container.forEach(function(c) {
        c.addEventListener("change", function(e) {
          result = e.target.checked;
          if (result) {
            document
              .querySelector("#next")
              .removeAttribute("class", "disabled");
          }
        });
      });

      console.log(result);
