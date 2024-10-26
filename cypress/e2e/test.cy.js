describe("test module", () => {
  it("login", () => {
    cy.visit("https://ehaj.hajj.gov.bd/");
    // cy.visit("https://uat-ehaj.oss.net.bd/");
    cy.get("li>a").contains("লগইন").click();
    cy.get("span").contains("হজযাত্রী/ গাইড লগইন").click();
    cy.get('input[id="mobile_no"]').type(".....................");
    cy.get('input[id="password"]').type(".....................");
    cy.get('button[id="next_btn"]').click();

    //Landing Page

    cy.url().should("include", "my-desk");
    cy.get('div[class="w-100 d-flex justify-content-between"]')
      .contains("প্রাক নিবন্ধন")
      .click();
    cy.get('a[class="dash-menu-text"]').contains("আবেদন").click();

    //Application Page

    cy.url().should("include", "pilgrims-list");
    cy.get('b[class="text-dark"]').click();
    cy.url().should("include", "pilgrim-create");
    cy.get('div>label>input[value="female"]').click();
    cy.get('div>label>input[value="male"]').click();
    cy.scrollTo("top");
    cy.get('input[placeholder="dd-mm-yyyy"]').click();
    let birthDate = cy
      .get('input[placeholder="dd-mm-yyyy"]')
      .type("04-Jan-1999");
    birthDate.click();
    cy.get("input[value='NID']").click();
    cy.get("input[placeholder='NID number']").type("1401501602");
    cy.get("button").contains("পরবর্তী").click();

    //Personal Information Page

    cy.get("input[placeholder='Name in Bangla']").type("মোঃ হাসনাত আবদুল্লাহ");
    cy.get("input[placeholder='Name in English']").type("MD Hasnat Abdullah");
    cy.get("input[placeholder='Father Name in Bangla']").type("আসিফ নজরুল");
    cy.get("input[placeholder='Father Name in Bangla']").type("আসিফ নজরুল");
    cy.get("input[placeholder='Mother Name in Bangla ']").type(
      "সৈয়দা রেজওয়ানা আহসান"
    );
    cy.get("span[id='select2--container']").click();
    cy.get("input[role='searchbox']").type("ENGINEER{enter}");
    cy.get("input[placeholder='Mobile number']").type(".....................");
    cy.get("select[class='form-control input-sm']").select("Unmarried");
    cy.get("button").contains("পরবর্তী").click();

    //Address
    //Permanent Address
    cy.get("b").contains("Address").should("be.visible");
    cy.xpath("(//input[@placeholder='Post Code'])[1]").type("1500");
    cy.xpath("(//span[@id='select2--container'])[1]").click();
    cy.get("input[role='searchbox']").type("DHAKA{enter}");
    cy.wait(500);
    cy.xpath("(//span[@id='select2--container'])[2]").click();
    cy.xpath("(//input[@role='searchbox'])[1]").type("MIRPUR{enter}");
    cy.xpath("(//input[@placeholder='Address'])[1]").type(
      "House 34, Road 34, Block F, Section 10,Mirpur"
    );

    //Present Address
    cy.xpath("(//input[@placeholder='Post Code'])[2]").type("1400");
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.get("input[role='searchbox']").type("CHANDPUR{enter}");
    cy.wait(1000);
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.get("input[role='searchbox']").type("UTTAR MATLAB{enter}");
    cy.xpath("(//input[@placeholder='Address'])[2]").type(
      "চদ্রিমমা উদ্দান গলি"
    );
    cy.get("button").contains("পরবর্তী").click();

    //Refundable Account Information
    cy.get("b").contains("Refundable Account Information").should("be.visible");
    cy.get("select[class='form-control input-sm']").select("Pilgrim own");
    cy.get("input[placeholder='Account Holder Name']").click();
    cy.get("input[placeholder='Account Number']").type("12345678910123");

    cy.xpath("(//span[@id='select2--container'])[1]").click();
    cy.xpath("(//ul[@id='select2--results'])[1]")
      .contains("Jamuna Bank Limited")
      .scrollIntoView()
      .click();
    cy.wait(500);

    cy.xpath("(//span[@id='select2--container'])[2]").click();
    cy.xpath("(//ul[@id='select2--results'])[1]")
      .contains("NOAKHALI")
      .scrollIntoView()
      .click();
    cy.wait(500);
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.get("input[role='searchbox']").type("CHOWMUHANI{enter}");
    cy.wait(500);
    // cy.get('input[type="file"]').selectFile("C:\\Users\\musth\\Desktop\\Cypress\\Picture.jpg");
    cy.get('input[type="file"]').selectFile("cypress/image/a.jpg", {
      force: true,
    });
    cy.wait(500);
    cy.get("button").contains("পরবর্তী").click();
    cy.scrollTo("top");
    cy.wait(500);
    cy.get("button")
      .contains("সাবমিট")
      .scrollIntoView({
        duration: 6000,
        easing: "linear",
        offset: { top: -600 },
      });
  });
});
