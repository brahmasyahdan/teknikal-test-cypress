describe('Testing Our Product', () => {
  it('Verifikasi URL dapat di akses', () => {
    cy.visit('')
    cy.url().should('eq', 'https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
  });

  it('Verifikasi judul form', () => {
    cy.visit('')
    cy.get('span.text-format-content:contains("Review our product")').should('exist')
  });

  it('Verifikasi form berisi beberapa field', () => {
    cy.visit('')
    cy.get('span.text-format-content:contains("Full name")').should('exist')
    cy.get('span.text-format-content:contains("Phone Number")').should('exist')
    cy.get('span:contains("Do you think your product or service is affordable or expensive?")').should('exist')
    cy.get('span.text-format-content span:contains("Rate our services")').should('exist')
    cy.get('span.text-format-content:contains("Review date")').should('exist')
  });

  it('Verifikasi Button menu titik tiga jika di klik akan menampilkan "Enable Immersive"', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .should('exist')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[1]')
    .should('exist')
    .should('be.visible')
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[2]')
    .should('exist')
    .should('be.visible')
  });

  it('Verifikasi mengaktifkan Immersive button', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .should('exist')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[1]/div/span[2]')
    .should('exist')
    .should('be.visible')
    .click()
    cy.xpath('//*[@id="QuestionId_r9f62b2a1fbe746ab953326f6937d4e73"]/div/span/span[2]/button')
    .should('exist')
    .should('be.visible');
  });

  it('Verifikasi jika menonaktifkan Immersive button', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .should('exist')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[1]/div/span[2]')
    .should('exist')
    .should('be.visible')
    .click()
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .should('exist')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[1]/div/span[2]')
    .should('exist')
    .should('be.visible')
    .click()
    cy.wait(2000)
    cy.window().then((win) => {
    const element = win.document.evaluate(
      '//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/button',
      win.document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    // Memastikan bahwa elemen adalah null
    expect(element).to.be.null;
    });
  });

  it('', () => {
    cy.visit('')
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[2]')
    .click
    cy.wait(2000)
    cy.window().then((win) => {
    const element = win.document.evaluate(
      '//*[@id="RuntimeRoot"]/div[2]/div/div/div/div[1]',
      win.document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    // Memastikan bahwa elemen adalah null
    expect(element).to.be.null;
    });
  });

  it('Verifikasi button clear form berfungsi', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri Ganteng')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('087678765431')
    cy.get('input[value="Affordable"]')
    .click()
    .should('be.checked')
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[1]')
    .click()
    cy.xpath('//*[@id="DatePicker0-label"]')
    .click()
    .click()
    .type('12/12/2023')
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .click()
    cy.xpath('//*[@id="ImmersiveReaderMenu"]/div[2]')
    .click()
    cy.xpath('//*[@id="RuntimeRoot"]/div[2]/div/div/div/div[2]/button[2]')
    .click()
    // check field kosong
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('have.value', '')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('have.value', '')
    // check radio button
    cy.get('input[value="Affordable"]').should('not.be.checked')
    cy.get('input[value="Expensive"]').should('not.be.checked')
    cy.get('input[value=""]').should('not.be.checked')
    // check star
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[5]')
    .should('exist')
    .should('have.css', 'color', 'rgb(36, 36, 36)')

    cy.xpath('//*[@id="DatePicker0-label"]')
    .should('have.value', '')
  });

  it('Verifikasi field "Full name"', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    .should('have.value', 'Bhasri')
  });

  it('Verifikasi field "Full name" tidak bisa diisi dengan angka', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('12345')
    .should('have.value', '12345')
    cy.contains('span', 'Please enter alphabetically.')
    .should('exist')
    .should('be.visible')
  });

  it('Verifikasi field "Full name" tidak diisi maka akan memunculkan "This question is required."', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    .should('have.value', 'Bhasri')
    .clear()
    cy.get('button[data-automation-id="submitButton"]').click()
    cy.contains('span', 'This question is required.').should('be.visible')
  });

  it('Verifikasi field "Phone Number" bisa diisi dengan angka', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('12345')
    .should('have.value', '12345')
  });

  it('Verifikasi field "Phone Number" tidak bisa diisi dengan abjad', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    .should('have.value', 'Bhasri')
    cy.contains('span', 'Please enter a number')
    .should('exist')
    .should('be.visible')
  });

  it('Verifikasi field "Phone Number" tidak diisi maka akan memunculkan "This question is required."', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('12345')
    .should('have.value', '12345')
    .clear()
    cy.get('button[data-automation-id="submitButton"]').click()
    cy.contains('span', 'This question is required.').should('be.visible')
  });

  it('Verifikasi Radio button "affordable", "expensive" dan "Other" bisa dipilih', () => {
    cy.visit('')
    cy.wait(2000)
    // cek jika salah satu radio button di klik
    cy.get('input[value="Affordable"]').click().should('be.checked')
    cy.get('input[value="Expensive"]').should('not.be.checked')
    cy.get('input[value=""]').should('not.be.checked')
   
    cy.get('input[value="Expensive"]').click().should('be.checked')
    cy.get('input[value="Affordable"]').should('not.be.checked')
    cy.get('input[value=""]').should('not.be.checked')
  
    cy.get('input[value=""]').click().should('be.checked')
    cy.get('input[value="Affordable"]').should('not.be.checked')
    cy.get('input[value="Expensive"]').should('not.be.checked')
  });

  it('Verifikasi saat memilih Radio button "Other" bisa mengisi field yang ada di other', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[value=""]').click().should('be.checked')
    cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/div/span/input')
    .should('exist')
    .should('be.visible')
    .type('Bhasri')
    cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/div/span/input')
    .should('have.value', 'Bhasri');

    cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/div/span/input')
    .should('have.value', 'Bhasri')

  });

  it('Verifikasi  Radio button tidak dipilih maka akan memunculkan "This question is required."', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('12345')
    .should('have.value', '12345')
    cy.get('button[data-automation-id="submitButton"]').click()
    cy.contains('span', 'This question is required.').should('be.visible')
  });

  it('Verifikasi ada 5 bintang jika di klik akan berganti warna', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[1]')
    .should('exist')
    .click()
    .should('have.css', 'color', 'rgb(36, 36, 36)')

    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[2]')
    .should('exist')
    .click()
    .should('have.css', 'color', 'rgb(36, 36, 36)')

    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[3]')
    .should('exist')
    .click()
    .should('have.css', 'color', 'rgb(36, 36, 36)')

    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[4]')
    .should('exist')
    .click()
    .should('have.css', 'color', 'rgb(36, 36, 36)')

    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[5]')
    .should('exist') //236, 244, 244
    .click()
    .should('have.css', 'color', 'rgb(36, 36, 36)')
  });  

  it('Verifikasi ada 5 bintang tidak dipilih maka akan memunculkan "This question is required."', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('12345')
    .should('have.value', '12345')
    cy.get('input[value="Affordable"]').click().should('be.checked')
    cy.get('input[value="Expensive"]').should('not.be.checked')
    cy.get('input[value=""]').should('not.be.checked')
    cy.get('button[data-automation-id="submitButton"]').click()
    cy.contains('span', 'This question is required.').should('be.visible')
    
  });

  it('Verifikasi ketika klik field date maka akan menampilkan pop up tanggal', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="DatePicker0-label"]')
    .should('exist')
    .click()
  cy.xpath('//*[@id="DatePicker-Callout1"]/div/div/div[2]')
    .should('exist')
    .should('be.visible')
  });

  it('Verifikasi bisa memilih tanggal pada pop up kalender', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="DatePicker0-label"]')
    .should('exist')
    .click()
    cy.xpath('//*[@id="DatePicker-Callout1"]/div/div/div[2]')
    .should('exist')
    .should('be.visible')
    .click()
    cy.xpath('//*[@id="DatePicker0-label"]').should('have.value','11/15/2023')
  });

  it('Verifikasi memasukkan format tanggal (m/d/yyyy)', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="DatePicker0-label"]')
    .should('exist')
    .click()
    .click()
    .type('12/12/2023')
    .should('have.value','12/12/2023')
  });

  it('Verifikasi memasukkan format tidak sesuai akan memunculkan warning', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="DatePicker0-label"]')
    .should('exist')
    .click()
    .click()
    .type('123456')
    cy.contains('span', 'Error: invalid date input, please input date in M/d/yyyy format').should('be.visible')
    cy.xpath('//*[@id="DatePicker0-label"]')
    .clear()
    .click()
    .click()
    .type('abcdefg')
    cy.contains('span', 'Error: invalid date input, please input date in M/d/yyyy format').should('be.visible')
  });

  it('Verifikasi ketika semua field diisi ', () => {
    cy.visit('')
    cy.wait(2000)
    cy.get('input[aria-label="Single line text"]').eq(0)
    .should('exist')
    .should('be.visible')
    .click()
    .type('Bhasri Ganteng')
    cy.get('input[aria-label="Single line text"]').eq(1)
    .should('exist')
    .should('be.visible')
    .click()
    .type('087678765431')
    cy.get('input[value="Affordable"]')
    .click()
    .should('be.checked')
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[1]')
    .click()
    cy.xpath('//*[@id="DatePicker0-label"]')
    .click()
    .click()
    .type('12/12/2023')
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[1]/div[1]/div/div[2]/div[1]/div/div/button')
    .click()
    cy.get('button[data-automation-id="submitButton"]').click()
    
    cy.wait(5000)

    cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[1]/span[2]')
    .should('exist')
    .should('be.visible')

  cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[1]/div[3]')
    .should('exist')
    .should('be.visible')
  });

  it('Verifikasi ketika semua field tidak diisi', () => {
    cy.visit('')
    cy.wait(2000)
    // field kosong
    cy.get('button[data-automation-id="submitButton"]').click()
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .should('exist')
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .invoke('text')
    .should('include', '5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.')

    // field question-1 terisi
    cy.get('input[aria-label="Single line text"]').eq(0)
    .click()
    .type('Bhasri Ganteng')
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .invoke('text')
    .should('include', '4 question(s) need to be completed before submitting: Question 2,Question 3,Question 4,Question 5.')

    // field question-2 terisi
    cy.get('input[aria-label="Single line text"]').eq(1)
    .click()
    .type('087678765431')
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .invoke('text')
    .should('include', '3 question(s) need to be completed before submitting: Question 3,Question 4,Question 5.')

    // field question-3 terisi
    cy.get('input[value="Affordable"]')
    .click()
    .should('be.checked')
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .invoke('text')
    .should('include', '2 question(s) need to be completed before submitting: Question 4,Question 5.')

    // field question-4 terisi
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[1]')
    .click()
    cy.get('#form-main-content1 > div > div > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)')
    .invoke('text')
    .should('include', '1 question(s) need to be completed before submitting: Question 5.')
  });

  it('Verifikasi button report', () => {
    cy.visit('')
    cy.wait(2000)
    cy.xpath('//*[@id="form-main-content1"]/div/div/div[2]/div[4]/a').click()
    cy.wait(5000)
    cy.get('#form-main-content1 > div > div:nth-child(1)')
    .invoke('text')
    .should('include', 'Report Abuse')
  });
}) 
