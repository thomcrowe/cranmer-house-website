import { config, collection, singleton, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Cranmer House' },
  },

  singletons: {
    dtsReading: singleton({
      label: 'DTS Current Reading',
      path: 'content/dts-reading',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Book Title' }),
        author: fields.text({ label: 'Author' }),
        description: fields.text({
          label: 'Brief Description',
          multiline: true,
          description: 'One or two sentences about the book.',
        }),
        current_chapters: fields.text({
          label: 'This Week',
          description: 'e.g. Introduction & Chapters 1–3',
        }),
        next_chapters: fields.text({
          label: 'Next Week',
          description: 'e.g. Chapters 4–6',
        }),
        quote: fields.text({
          label: 'Featured Quote',
          multiline: true,
        }),
        quote_attribution: fields.text({
          label: 'Quote Attribution',
          description: 'e.g. St. Athanasius — On the Incarnation, Chapter 3',
        }),
      },
    }),

    settings: singleton({
      label: 'Site Settings',
      path: 'content/settings',
      format: { data: 'json' },
      schema: {
        chaplain_email: fields.text({
          label: 'Chaplain Email',
          description: 'e.g. frthom@cranmerhouse.org',
        }),
        instagram_url: fields.text({
          label: 'Instagram URL',
          description: 'Full URL including https://',
        }),
        facebook_url: fields.text({
          label: 'Facebook URL',
          description: 'Full URL including https://',
        }),
        giving_url: fields.text({
          label: 'Online Giving URL',
          description: "St. John's online giving page — designate for Cranmer House",
        }),
        mailing_address: fields.text({
          label: 'Mailing Address',
          multiline: true,
          description: 'Check mailing address (shown on Give page)',
        }),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'content/events/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Title' }),
        date: fields.date({ label: 'Date' }),
        time: fields.text({ label: 'Time', description: 'e.g. 7:00 PM' }),
        location: fields.text({ label: 'Location' }),
        university: fields.select({
          label: 'Campus',
          options: [
            { label: 'Both campuses', value: 'both' },
            { label: 'ORU only', value: 'oru' },
            { label: 'TU only', value: 'tu' },
          ],
          defaultValue: 'both',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Dead Theologians Society', value: 'dts' },
            { label: 'Worship', value: 'worship' },
            { label: 'Social', value: 'social' },
            { label: 'Service', value: 'service' },
            { label: 'Formation', value: 'formation' },
          ],
          defaultValue: 'dts',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          description: 'A sentence or two about this gathering.',
        }),
      },
    }),

    pastReadings: collection({
      label: 'DTS Past Readings',
      slugField: 'work',
      path: 'content/past-readings/*',
      format: { data: 'json' },
      schema: {
        work: fields.text({ label: 'Book Title' }),
        author: fields.text({ label: 'Author' }),
        period: fields.text({
          label: 'Period / Century',
          description: 'e.g. 4th Century, 20th Century',
        }),
      },
    }),

    announcements: collection({
      label: 'Announcements',
      slugField: 'title',
      path: 'content/announcements/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Title' }),
        message: fields.text({
          label: 'Message',
          multiline: true,
          description: 'Keep it short — this shows as a banner across the top of the site.',
        }),
        active: fields.checkbox({
          label: 'Show on site',
          defaultValue: false,
        }),
        link_label: fields.text({
          label: 'Link Label (optional)',
          description: 'e.g. "Learn more" or "Register"',
        }),
        link_url: fields.text({
          label: 'Link URL (optional)',
        }),
      },
    }),
  },
})
