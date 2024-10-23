import React from "react";
import MobileHead from "../../components/mobile_head";
import "./cv_page.scss";

function CVPage() {
  return (
      <div className="grants">
        <MobileHead />
        <div>
          <h6 className="mb-5 text-3xl">Education</h6>
          <p>
            2023: Photojournalism and Documentary Photography – Market Photo
            Workshop, Johannesburg, ZA
          </p>
          <p>
            2022: Bachelor of Arts & Education, History Education – University
            of Lagos, Nigeria
          </p>
          <p>
            2017: National Diploma, Mass Communication – Yaba College of
            Technology, Nigeria
          </p>
        </div>
        <div className="mt-5">
          <h6 className="mb-5 text-3xl">Publications </h6>
          <p>
            2024: "Nigeria, the Largest Democracy in Africa, Bends Under the
            'Wahala'" – Les Echos
          </p>
          <p>2024: Photo Reportages in Lagos – AFP</p>
          <p>
            2024: "Revisit: New Culture Studios in Ibadan, Nigeria by Demas
            Nwoko" – Architectural Review
          </p>
          <p>
            2023: Photo Reportage in Maiduguri – Arete / UN World Food Programme
          </p>
          <p>
            2021: "Gun for Hire: Nigeria Security Fears Spark Boom in Private
            Protection" – Financial Times
          </p>

          <p>
            2020: "#EndSARS is a Rare Moment of Class Solidarity in Nigeria" –
            Sahelien
          </p>

          <p>2020: Photo Narration in Oyo – ICLEI Africa’s RISE Africa</p>

          <p>
            2020: Photo Reportage in Lagos – Coffey International Development,
            Ltd
          </p>
          <p>2020: "Yours in Arms" – No Wahala Magazine</p>
        </div>
        <div className="mt-5">
          <h6 className="mb-5 text-3xl">Grants/Awards</h6>
          <p>2024: Magnum Photos/Lagos Photo; Beyond The Silence – Recipient</p>

          <p>
            2024: Dior Photography and Visual Arts Award for Young Talents –
            Laureate
          </p>
          <p>2023: Prince Claus Seed Awards – Recipient</p>
          <p>2021: Daniele Tamagni Grant – Recipient</p>

          <p>
            2020: Bronx Documentary Center/Darryl Chappell Grant – Recipient
          </p>

          <p>2019: W. Eugene Smith Memorial Fund Student Grant – Recipient</p>
        </div>

        <div className="mt-5">
          <h6 className="mb-5 text-3xl">Group Exhibitions</h6>
          <p>
            2024: Christian Dior Parfums / LUMA Arles – Dior Photography and
            Visual Arts Award for Young Talents, Arles, France
          </p>
          <p>2024: Daniele Tamagni – Style Is Life, Milano, Italy</p>
          <p>2024: StoryMi / CFI – Naija in Lights, Paris, France</p>
          <p>2023: StoryMi / CFI – Naija in Lights, Lagos, Nigeria</p>

          <p>2023: Photoville – New York</p>
          <p>
            2022: World Press / Everyday Projects Exhibition – Oldenburg,
            Germany
          </p>

          <p>2021: HPR 2022 Public Space Exhibition – Hamburg, Germany</p>

          <p>2020: Hidden Flows Exhibition – ICLEI Africa</p>

          <p>
            2019: Kigali Centre for Photography / VII Exhibition – Kigali,
            Rwanda
          </p>
          <p>
            2018: African Artists’ Foundation – Canon Alumni Exhibition, Lagos,
            Nigeria
          </p>
        </div>
      </div>

  );
}

export default CVPage;
