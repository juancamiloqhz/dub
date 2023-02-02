export const getPlanFromUsageLimit = (usageLimit: number) => {
  // return PRO_TIERS.find((tier) => tier.quota === usageLimit)?.name || "Free";
  return (
    PRO_TIERS.find((tier) => tier.quota === usageLimit)?.name || "Gratuito"
  );
};

export const PRO_TIERS = [
  {
    name: "Pro 10K",
    quota: 10000,
    price: {
      monthly: {
        amount: 9,
        priceIds: {
          test: "price_1MWojZJXR462Talg7b9FTdez",
          production: "price_1MWojZJXR462Talg7b9FTdez",
        },
      },
      yearly: {
        amount: 90,
        priceIds: {
          test: "price_1MWojZJXR462TalgzHlGUstt",
          production: "price_1MWojZJXR462TalgzHlGUstt",
        },
      },
    },
  },
  {
    name: "Pro 25K",
    quota: 25000,
    price: {
      monthly: {
        amount: 19,
        priceIds: {
          test: "price_1MWomxJXR462TalgThWDnKJS",
          production: "price_1MWomxJXR462TalgThWDnKJS",
        },
      },
      yearly: {
        amount: 190,
        priceIds: {
          test: "price_1MWomxJXR462Talg8uwHfn9B",
          production: "price_1MWomxJXR462Talg8uwHfn9B",
        },
      },
    },
  },
  {
    name: "Pro 50K",
    quota: 50000,
    price: {
      monthly: {
        amount: 29,
        priceIds: {
          test: "price_1MWonjJXR462Talgp4jgch8D",
          production: "price_1MWonjJXR462Talgp4jgch8D",
        },
      },
      yearly: {
        amount: 290,
        priceIds: {
          test: "price_1MWoo3JXR462TalgdOavOE6V",
          production: "price_1MWoo3JXR462TalgdOavOE6V",
        },
      },
    },
  },
  {
    name: "Pro 100K",
    quota: 100000,
    price: {
      monthly: {
        amount: 49,
        priceIds: {
          test: "price_1MWop6JXR462TalgQicfQuNo",
          production: "price_1MWop6JXR462TalgQicfQuNo",
        },
      },
      yearly: {
        amount: 490,
        priceIds: {
          test: "price_1MWop6JXR462TalgsLse4hE3",
          production: "price_1MWop6JXR462TalgsLse4hE3",
        },
      },
    },
  },
  {
    name: "Pro 500K",
    quota: 500000,
    price: {
      monthly: {
        amount: 79,
        priceIds: {
          test: "price_1MWopyJXR462TalgB5U4m7oq",
          production: "price_1MWopyJXR462TalgB5U4m7oq",
        },
      },
      yearly: {
        amount: 790,
        priceIds: {
          test: "price_1MWopzJXR462TalgXMqQHQPM",
          production: "price_1MWopzJXR462TalgXMqQHQPM",
        },
      },
    },
  },
  {
    name: "Pro 1M",
    quota: 1000000,
    price: {
      monthly: {
        amount: 99,
        priceIds: {
          test: "price_1MWoqxJXR462Talg9yDa9aAI",
          production: "price_1MWoqxJXR462Talg9yDa9aAI",
        },
      },
      yearly: {
        amount: 990,
        priceIds: {
          test: "price_1MWoqxJXR462TalgIqy4ZUEc",
          production: "price_1MWoqxJXR462TalgIqy4ZUEc",
        },
      },
    },
  },
];
