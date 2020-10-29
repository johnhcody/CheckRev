# == Schema Information
#
# Table name: hours
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  sun_open    :datetime
#  sun_close   :datetime
#  mon_open    :datetime
#  mon_close   :datetime
#  tues_open   :datetime
#  tues_close  :datetime
#  wed_open    :datetime
#  wed_close   :datetime
#  thur_open   :datetime
#  thur_close  :datetime
#  fri_open    :datetime
#  fri_close   :datetime
#  sat_open    :datetime
#  sat_close   :datetime
#  notes       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Hour < ApplicationRecord

    

end
