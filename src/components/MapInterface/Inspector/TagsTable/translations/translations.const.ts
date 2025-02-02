/* prettier-ignore */

// Legend:
// - "ALL--" stands for "all sources". Those translations are applied without checking the soureId
// - "ALL--category" is replaced with 'ALL--highway' in `ConditionalFormattedValue`
export const translations: { [key: string]: string } = {
  'ALL--category=bicycleRoad': 'Fahrradstraße',
  'ALL--category=crossing': 'Straßenquerung',
  'ALL--category=cycleway_adjoining': 'Radweg (baulich von der Fahrbahn abgesetzt aber straßenbegleitend)',
  'ALL--category=cycleway_isolated': 'Radweg, frei geführt',
  'ALL--category=cycleway_isolatedOrIdjoining': 'Radweg (Straßenbegleitend oder frei geführt; Kategorisierung unklar)',
  'ALL--category=cyclewayLink': 'Radweg-Verbindungsstück. Häufig in OpenStreetMap verwendet um Routenfähiges Netz zu erzeugen; repräsentiert nur selten physische Infrastruktur.',
  'ALL--category=cyclewayOnHighway_advisory': 'Schutzstreifen',
  'ALL--category=cyclewayOnHighway_advisoryOrExclusive': 'Radfahrstreifen oder Schutzstreifen (Kategorisierung unklar)',
  'ALL--category=cyclewayOnHighway_exclusive': 'Radfahrstreifen',
  'ALL--category=cyclewayOnHighwayBetweenLanes': 'Radfahrstreifen in Mittellage (Fahrradweiche)',
  'ALL--category=footAndCyclewaySegregated_adjoining': 'Getrennter Rad- und Gehweg, straßenbegleitend',
  'ALL--category=footAndCyclewaySegregated_adjoiningOrIsolated': 'Getrennter Rad- und Gehweg (Straßenbegleitend oder frei geführt; Kategorisierung unklar)',
  'ALL--category=footAndCyclewaySegregated_isolated': 'Getrennter Rad- und Gehweg, frei geführt',
  'ALL--category=footAndCyclewayShared_adjoining': 'Gemeinsamer Geh- und Radweg, straßenbegleitend',
  'ALL--category=footAndCyclewayShared_adjoiningOrIsolated': 'Gemeinsamer Geh- und Radweg (Straßenbegleitend oder frei geführt; Kategorisierung unklar)',
  'ALL--category=footAndCyclewayShared_isolated': 'Gemeinsamer Geh- und Radweg, frei geführt',
  'ALL--category=footwayBicycleYes_adjoining': 'Gehweg mit Radwegfreigabe, straßenbegleitend',
  'ALL--category=footwayBicycleYes_adjoiningOrIsolated': 'Gehweg mit Radwegfreigabe (Straßenbegleitend oder frei geführt; Kategorisierung unklar)',
  'ALL--category=footwayBicycleYes_isolated': 'Gehweg mit Radwegfreigabe, frei geführt',
  'ALL--category=livingStreet': 'Verkehrsberuhigter Bereich (Spielstraße)',
  'ALL--category=needsClarification': 'Führungsform unklar. Die Attribute in OpenStreetMap sind nicht ausreichend, um die Führungsform zu kategorisieren. Das deutet darauf hin, dass zusätzlich Attribute in OSM ergänzt werden müssen.',
  'ALL--composit_surface_smoothness--key': 'Oberfläche',
  'ALL--highway--key': 'Straßentyp',
  'ALL--highway=bicycle_road': 'Fahrradstraße', // roadClassification--category
  'ALL--highway=construction': 'Straße ist in Bau',
  'ALL--highway=cycleway': 'Radweg',
  'ALL--highway=footway': 'Fußweg',
  'ALL--highway=living_street': 'Verkehrsberuhigter Bereich',
  'ALL--highway=path': 'Weg / Pfad',
  'ALL--highway=pedestrian': 'Fußgängerzone',
  'ALL--highway=primary': 'Bundesstraße/Hauptverbindungsstraße',
  'ALL--highway=residential': 'Anwohnerstraße',
  'ALL--highway=secondary': 'Landesstraße/Wichtige Durchgangsstraße',
  'ALL--highway=service_alley': 'Gasse', // roadClassification--category
  'ALL--highway=service_driveway': 'Grundstückszufahrt', // roadClassification--category
  'ALL--highway=service_parking_aisle': 'Parkplatzweg', // roadClassification--category
  'ALL--highway=service_road': 'Zufahrtsweg', // roadClassification--category
  'ALL--highway=service': 'Zufahrtsweg',
  'ALL--highway=steps': 'Stufen',
  'ALL--highway=tertiary': 'Kreisstraße/Untergeordnete Durchgangsstraße',
  'ALL--highway=track': 'Wald- / Feldweg',
  'ALL--highway=unclassified': 'Nebenstraße mit Verbindungscharakter',
  'ALL--highway=unspecified_road_category': 'Unkategorisierte Straße', // roadClassification--category
  'ALL--maxspeed--key': 'Höchstgeschwindigkeit',
  'ALL--name--key': 'Name',
  'ALL--oneway--key': 'Fahrtrichtung',
  'ALL--oneway=-1': 'Entgegen der Einbahnstraße freigegeben',
  'ALL--smoothness=bad': 'Schlecht',
  'ALL--smoothness=excellent': 'Sehr gut',
  'ALL--smoothness=good': 'Gut',
  'ALL--smoothness=intermediate': 'Mittel gut',
  'ALL--smoothness=very_bad': 'Sehr schlecht',
  'ALL--surface=asphalt': 'Asphalt',
  'ALL--surface=cobblestone': 'Kopfsteinpflaster',
  'ALL--surface=compacted': 'Verdichtete Deckschicht',
  'ALL--surface=concrete:lanes': 'Betonspurplatten',
  'ALL--surface=concrete:plates': 'Betonplatten',
  'ALL--surface=concrete': 'Beton',
  'ALL--surface=dirt': 'Erde/Boden',
  'ALL--surface=fine_gravel': 'Fester Splitt oder Grand',
  'ALL--surface=grass_paver': 'Rasengitterstein',
  'ALL--surface=grass': 'Gras',
  'ALL--surface=gravel': 'Schotter',
  'ALL--surface=ground': 'Erde/Boden',
  'ALL--surface=metal': 'Metall',
  'ALL--surface=paved': 'Versiegelte Oberfläche (unspezifisch)',
  'ALL--surface=paving_stones': 'Verbundpflastersteine',
  'ALL--surface=pebblestone': 'Kies',
  'ALL--surface=sand': 'Sand',
  'ALL--surface=sett': 'Behauenes Steinpflaster (Kopfsteinpflaster)',
  'ALL--surface=unhewn_cobblestone': 'Kopfsteinpflaster',
  'ALL--surface=unpaved': 'Unbefestigt (unspezifisch)',
  'ALL--traffic_sign--key': 'Verkehrszeichen',
  'ALL--traffic_sign=none': 'Unbeschildert',
  'ALL--width--key': 'Breite',
  'mapillary_coverage--title': 'Mapillary Foto',
  'parkraumParking--capacity_status--key': 'Vollständigkeit',
  'parkraumParking--capacity_status=data_missing': 'Daten fehlen – bisher wurden noch keine Daten in OSM hinterlegt',
  'parkraumParking--capacity_status=no_parking': 'Daten erfasst (Parken verboten)',
  'parkraumParking--capacity_status=not_processed_yet': 'Daten fehlen – Prozessierung in Arbeit',
  'parkraumParking--capacity_status=other': 'Daten erfasst',
  'parkraumParking--capacity_status=segment_too_small': 'Daten erfasst und prozessiert aber Segment zu klein für einen Parkstand',
  'parkraumParking--capacity--key': 'Stellplatzanzahl',
  'parkraumParking--highway_name--key': 'Straßenname',
  'parkraumParking--highway_width_proc_effective--key': 'Nutzbare Fahrbahnbreite',
  'parkraumParking--length--key': 'Länge',
  'parkraumParking--operator_type--key': 'Rechtliche Zuordnung',
  'parkraumParking--operator_type=private': 'Privat',
  'parkraumParking--operator_type=public': 'Öffentlich',
  'parkraumParking--orientation--key': 'Ausrichtung',
  'parkraumParking--orientation=diagonal': 'Schrägparken',
  'parkraumParking--orientation=no': '(!) Kein Parken',
  'parkraumParking--orientation=parallel': 'Parallelparken',
  'parkraumParking--orientation=perpendicular': 'Querparken',
  'parkraumParking--parking--key': 'Art des Parkens',
  'parkraumParking--parking=lane': 'Auf der Fahrbahn',
  'parkraumParking--parking=street_side': 'Parkbucht',
  'parkraumParking--position--key': 'Position',
  'parkraumParking--position=half_on_kerb': 'Halb auf dem Gehweg',
  'parkraumParking--position=lane': 'Auf der Fahrbahn',
  'parkraumParking--position=no': 'Park- oder Halteverbot (implizit oder Beschildert)',
  'parkraumParking--position=on_kerb': 'Auf dem Gehweg',
  'parkraumParking--position=separate': 'Parkstand als separate Geometrie erfasst; Detailattribute bitte an der separaten Geometrie ablesen.',
  'parkraumParking--position=shoulder': 'Seitenstreifen',
  'parkraumParking--position=street_side': 'Parkbucht',
  'parkraumParking--source_capacity--key': 'Quelle Stellplatzanzahl',
  'parkraumParking--source_capacity=estimated': 'Interpolation',
  'parkraumParking--source_capacity=OSM': 'Explizit in OSM erfasst',
  'parkraumParking--surface--key': 'Oberfläche',
  'parkraumParking--title': 'Parkraum',
  'parkraumParkingAreas--access--key': 'Zugang',
  'parkraumParkingAreas--access=customers': 'Kund:innen',
  'parkraumParkingAreas--access=no': 'Beschränkt',
  'parkraumParkingAreas--access=permissive': 'Geduldet',
  'parkraumParkingAreas--access=private': 'Privat',
  'parkraumParkingAreas--access=yes': 'Öffentlich',
  'parkraumParkingAreas--building--key': 'Gebäudeart',
  'parkraumParkingAreas--building=carport': 'Carport',
  'parkraumParkingAreas--building=garage': 'Garage',
  'parkraumParkingAreas--building=garages': 'Garagen',
  'parkraumParkingAreas--building=parking': 'Parkhaus',
  'parkraumParkingAreas--building=supermarket': 'Supermarkt',
  'parkraumParkingAreas--capacity--key': 'Kapazität (Explizit, OSM)',
  'parkraumParkingAreas--parking--key': 'Art',
  'parkraumParkingAreas--parking=carport': 'Carport',
  'parkraumParkingAreas--parking=carports': 'Carport',
  'parkraumParkingAreas--parking=garage_boxes': 'Garagen',
  'parkraumParkingAreas--parking=multi-storey': 'Parkhaus',
  'parkraumParkingAreas--parking=rooftop': 'Dachebene',
  'parkraumParkingAreas--parking=surface': 'Flächenparkplatz',
  'parkraumParkingAreas--parking=underground': 'Tiefgarage',
  'parkraumParkingAreas--title': 'Parkplatz-Flächen',
  'parkraumParkingStats--admin_level--key': 'Grenzen Level',
  'parkraumParkingStats--d_other_km--key': 'Summe Straßenlänge mit Attribute außer "lane" und "street_side"',
  'parkraumParkingStats--done_percent--key': 'Stand Erfassung Parkraum',
  'parkraumParkingStats--lane_km--key': 'Summe Straßenlänge mit Attribut "lane"',
  'parkraumParkingStats--length_wo_dual_carriageway--key': 'Summe Straßenlänge ohne Berücksichtigung von dual_carriageway',
  'parkraumParkingStats--street_side_km--key': 'Summe Straßenlänge mit Attribut "street_side"',
  'parkraumParkingStats--sum_km--key': 'Summe Straßenlänge (alle Attribute)',
  'parkraumParkingStats--title': 'Statisik zum Parkraum',
  'tarmac_bikelanes--category--key': 'Führungsform',
  'tarmac_bikelanes--category=pedestrianAreaBicycleYes': 'Fußgängerzone, Fahrrad frei',
  'tarmac_bikelanes--category=sharedBusLane': 'Gemeinsamer Fahrstreifen mti Bussen',
  'tarmac_bikelanes--category=sharedMotorVehicleLane': 'Gemeinsamer Fahrstreifen mit Kfz',
  'tarmac_bikelanes--composit_highway--key': 'Straßentyp',
  'tarmac_bikelanes--oneway=car_not_bike': 'Einbahnstraße für Kfz aber Zweirichtungsradwege',
  'tarmac_bikelanes--oneway=implicit_no': 'Zweirichtungsradweg (implizite Angabe)',
  'tarmac_bikelanes--oneway=implicit_yes': 'Einrichtungsradweg (implizite Angabe)',
  'tarmac_bikelanes--oneway=no': 'Zweirichtungsradwege',
  'tarmac_bikelanes--oneway=yes': 'Einrichtungsradweg',
  'tarmac_bikelanes--title': 'Daten zur Radinfrastruktur',
  'tarmac_bikelanesPresence--left--key': 'Vollständigkeit Links (Linienrichtung)',
  'tarmac_bikelanesPresence--left=data_no': 'Keine Radinfrastruktur (explizit)',
  'tarmac_bikelanesPresence--left=missing': 'Unvollständig (keine Infrastruktur erkannt)',
  'tarmac_bikelanesPresence--left=not_expected': 'Vermutlich vollständig (keine Infrastruktur erwartet)',
  'tarmac_bikelanesPresence--oneway=implicit_yes': 'Einrichtungsradweg (implizite Angabe)',
  'tarmac_bikelanesPresence--oneway=no': 'Zweirichtungsradwege',
  'tarmac_bikelanesPresence--oneway=yes': 'Einrichtungsradweg',
  'tarmac_bikelanesPresence--right--key': 'Vollständigkeit Rechts (Linienrichtung)',
  'tarmac_bikelanesPresence--right=data_no': 'Keine Radinfrastruktur (explizit)',
  'tarmac_bikelanesPresence--right=missing': 'Unvollständig (keine Infrastruktur erkannt)',
  'tarmac_bikelanesPresence--right=not_expected': 'Vermutlich vollständig (keine Infrastruktur erwartet)',
  'tarmac_bikelanesPresence--self--key': 'Vollständigkeit Mittellinie',
  'tarmac_bikelanesPresence--self=data_no': 'Keine Radinfrastruktur (explizit)',
  'tarmac_bikelanesPresence--self=missing': 'Unvollständig (keine Infrastruktur erkannt)',
  'tarmac_bikelanesPresence--self=not_expected': 'Vermutlich vollständig (keine Infrastruktur erwartet)',
  'tarmac_bikelanesPresence--title': 'Daten zu Vollständigkeit der Führungsform',
  'tarmac_boundaries--admin_level--key': 'Grenzen Level',
  'tarmac_boundaries--admin_level=7': 'Level 7 — Meistens Verwaltungsgemeinschaft, Amt', // https://wiki.openstreetmap.org/wiki/DE:Grenze
  'tarmac_boundaries--admin_level=8': 'Level 8 — Meistens (Kreisangehörige) Gemeinde / Stadt',
  'tarmac_boundaries--title': 'Grenzen',
  'tarmac_buildings--building--key': 'Gebäudeart',
  'tarmac_buildings--building=garage': 'Garage (einzeln)',
  'tarmac_buildings--building=garages': 'Mehrere Garagen',
  'tarmac_buildings--building=retail': 'Gebäude des Einzelhandels',
  'tarmac_buildings--title': 'Gebäude',
  'tarmac_education--amenity--key': 'Art der Bildngseinrichtung',
  'tarmac_education--amenity=kindergarten': 'Kindergarten',
  'tarmac_education--amenity=school': 'Schule',
  'tarmac_education--title': 'Daten zu Bildungseinrichtungen',
  'tarmac_landuse--landuse--key': 'Landnutzung',
  'tarmac_landuse--landuse=allotments': 'Kleingartenanlage',
  'tarmac_landuse--landuse=cemetery': 'Friedhofsgelände',
  'tarmac_landuse--landuse=commercial': 'Gewerbliche Nutzung',
  'tarmac_landuse--landuse=farmyard': 'Landwirdschaftliche Nutzung',
  'tarmac_landuse--landuse=residential': 'Wohngebiet',
  'tarmac_landuse--landuse=retail': 'Gewerbliche Nutzung (Einzelhandel/Geschäfte)',
  'tarmac_landuse--landuse=school': 'Schulgelände',
  'tarmac_landuse--landuse=university': 'Universitätsgelände',
  'tarmac_landuse--title': 'Daten zur Landnutzung',
  'tarmac_lit--category--key': 'Beleuchtung',
  'tarmac_lit--category=lit': 'Beleuchtet',
  'tarmac_lit--category=special': 'Spezielle Angaben',
  'tarmac_lit--category=unlit': 'Nicht beleuchtet',
  'tarmac_lit--lit--key': 'Beleuchtung Details',
  'tarmac_lit--lit=no': 'Nicht beleuchtet',
  'tarmac_lit--lit=yes': 'Beleuchtet',
  'tarmac_lit--title': 'Daten zur Beleuchtung',
  'tarmac_maxspeed--maxspeed_source--key': 'Quelle',
  'tarmac_maxspeed--maxspeed_source=inferred_from_highway': 'Abgeleitet vom `highway`-Tag.',
  'tarmac_maxspeed--maxspeed_source=maxspeed_tag': 'In OSM erfasst über einen `maxspeed`-Kategorie-Tag.',
  'tarmac_maxspeed--maxspeed_source=maxspeed': 'In OSM erfasst als Tag `maxspeed`.',
  'tarmac_maxspeed--maxspeed:backward': 'Spezielle Höchstgeschwindigkeit gegen die Linienrichtung',
  'tarmac_maxspeed--maxspeed:conditional': 'Spezielle Höchstgeschwindigkeit mit Einschränkungen',
  'tarmac_maxspeed--maxspeed:forward': 'Spezielle Höchstgeschwindigkeit mit der Linienrichtung',
  'tarmac_maxspeed--maxspeed:type--key': 'Kategorie-Tag',
  'tarmac_maxspeed--source:maxspeed--key': 'Kategorie-Tag',
  'tarmac_maxspeed--title': 'Daten zur Höchstgeschwindigkeit',
  'tarmac_maxspeed--zone:maxspeed--key': 'Kategorie-Tag',
  'tarmac_places--place--key': 'Ortskategorie',
  'tarmac_places--place=borough': 'Stadtteil/Stadtbezirke',
  'tarmac_places--place=city': 'Stadte',
  'tarmac_places--place=hamlet': 'Siedlung',
  'tarmac_places--place=suburb': 'Stadtteil',
  'tarmac_places--place=town': 'Stadt oder große Gemeinde',
  'tarmac_places--place=village': 'Dorf',
  'tarmac_places--population--key': 'Einwohner:innen-Anzahl',
  'tarmac_places--population:date--key': 'Datum der Quelle der Einwohner:innen-Anzahl',
  'tarmac_places--title': 'Daten zu Orten',
  'tarmac_poiClassification--category--key': 'Kategorisierung des POI',
  'tarmac_poiClassification--name--key': 'Name POI',
  'tarmac_poiClassification--title': 'Daten zu Start-Ziel-Punkten',
  'tarmac_poiClassification--type--key': 'Detail-Kategorie',
  'tarmac_poiClassification--type=amenity-bank': 'Bank',
  'tarmac_poiClassification--type=amenity-doctors': 'Arzt',
  'tarmac_poiClassification--type=amenity-fast_food': 'Imbiss',
  'tarmac_poiClassification--type=amenity-kindergarten': 'Kindergarten',
  'tarmac_poiClassification--type=amenity-place_of_worship': 'Kirche',
  'tarmac_poiClassification--type=amenity-school': 'Schule',
  'tarmac_publicTransport--title': 'ÖPNV',
  'tarmac_roadClassification--category--key': 'Straßentyp',
  'tarmac_roadClassification--oneway=car_and_bike_dual_carriageway': 'Einbahnstraße aufgrund getrennt erfasster Fahrspuren für Kfz- und Radverkehr',
  'tarmac_roadClassification--oneway=car_and_bike': 'Einbahnstraße für Kfz- und Radverkehr',
  'tarmac_roadClassification--oneway=car_not_bike_dual_carriageway': 'Einbahnstraße aufgrund getrennt erfasster Fahrspuren für Kfz aber Zweirichtungsradweg',
  'tarmac_roadClassification--oneway=car_not_bike': 'Einbahnstraße für Kfz aber Zweirichtungsradweg',
  'tarmac_roadClassification--title': 'Daten zu Straßentypen',
  'tarmac_surfaceQuality--smoothness_source--key': 'Quelle Zustand',
  'tarmac_surfaceQuality--smoothness_source=surface_to_smoothness': 'Abgeleitet von Belag',
  'tarmac_surfaceQuality--smoothness_source=tag': 'OSM-Tag',
  'tarmac_surfaceQuality--surface_source--key': 'Quelle Belag',
  'tarmac_surfaceQuality--surface_source=nothing_found': 'Daten fehlen in OpenStreetMap',
  'tarmac_surfaceQuality--surface_source=tag': 'OSM-Tag',
  'tarmac_surfaceQuality--title': 'Daten zur Oberflächenqualität',
}
