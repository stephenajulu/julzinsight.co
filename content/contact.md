---
title: Contact
hide_title: false
sections:
  - type: form_section
    section_id: contact-form
    content: >-
      Let’s build something great together.<br>

      Complete our contact form or send us an email at
      [julzinsight@gmail.com](mailto:julzinsight@gmail.com).

    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: What services are you looking for?
        default_value: Please select
        options:
          - Design
          - Development
          - Marketing
          - IT Consultation
          - As-a-service
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
seo:
  title: Contact - Julz Insight
  description: Contact the Julz Insight team
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact - Julz Insight
      keyName: property
    - name: 'og:description'
      value: Contact the Julz Insight team
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact - Julz Insight
    - name: 'twitter:description'
      value: Contact the Julz Insight team
layout: advanced
---
