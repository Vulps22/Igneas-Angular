import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [StyleClassModule, ButtonModule, RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  discordUrl = environment.discordUrl;
  disableSignup = environment.disableSignUp

  features = {
    'free': [
      'Access up to 100 profiles on The Grid',
      'Every Safety feature we ever add',
      'Private Messaging',
      'Filter by Age, Gender, Ethnicity, Sexuality, Looking For, Sexual Preferences (top/bottom, sub/dom), up to 2 tags',
      'Distance \'as the crow flies\'',
      'Adverts are never intrusive',
      'Add up to 2 tags to your profile'
    ],
    'premium': [
      'Everything from the Basic package',
      'Filter by everything in the profile',
      'Distance by road',
      'No Adverts',
      'Unlimited profiles on The Grid',
      'Filter by up to 10 tags'

    ],
    'verified': [
      'One Time payment',
      'After Verifying your age and ID, Unlock Verified Status',
      'Your grid square stands out',
      'Filter only Verified Profiles',
      'Prevent unverified profiles from sending the first message'
    ],
  };

  whyChoose = [
    {
      icon: 'th-large',
      useFa: false,
      title: 'No more \'swiping fatigue\'',
      value: 'Igneas irradicates that god-awful "swipe-to-match" architecture, and replaces it with a much more satisfying Grid, allowing you to freely scroll back and forth between potential matches'
    },
    {
      icon: 'filter',
      useFa: false,
      title: 'Advanced Filtering',
      value: 'You will only ever see people who match what you\'re looking for, and only if you match what they\'re looking for! <br> Our Advanced Filtering Algorithm does the matching before you even see anyone!'
    },
    {
      icon: 'shield',
      useFa: false,
      title: 'Safety First',
      value: 'With opt-in image sending in DM\'s, Trustworthiness-ratings, and 3rd-party Identity (and Age) Verification, Igneas has been designed from the beginning with your safety in mind'
    },
    {
      icon: 'people-group',
      useFa: true,
      title: 'More Than Just A Dating App',
      value: 'Igneas\' filters allow you to choose what you\'re looking for, whether you want something long term, a friend to got for a pint with at the weekend, or something more immediate 😉. Igneas will show you exactly what you want.'
    },
    {
      icon: 'car',
      useFa: false,
      title: 'Accurate Distances',
      value: 'No More unpleasant surprises when you realise your match is on the other side of a river that adds an hour onto your journey to meet them. Igneas offers the option of using google maps to work out distances by road!'
    },
    {
      icon: 'ellipsis-h',
      useFa: false,
      title: 'Much Much More',
      value: 'We\'ve only just scratched the surface of what this powerful app can (and will) do for you! Every update brings new and exciting features to make your dating life safer, and more accessible!'
    },
  ];

  safety = [
    {
      icon: 'flag',
      useFa: false,
      title: 'Trustworthiness Rating',
      value: 'Each profile features a Trustworthiness rating. Users can anonymously report Catfishing, suspicious behavior, or failed meetups. Respectful interactions are essential to maintain a positive rating and ensure successful matches.'
    },
    {
      icon: 'eye-slash',
      useFa: false,
      title: 'Cyberflashing Protection',
      value: 'Igneas ensures a safe environment by requiring mutual consent for image sharing, preventing Cyberflashing. We promptly investigate any reports to maintain a positive user experience.'
    },
    {
      icon: 'id-card',
      useFa: false,
      title: 'Age and Identity Verification',
      value: 'Secure your peace of mind with Age and Identity Verification. Utilizing a trusted third-party service, Igneas ensures that profiles are authenticated, providing assurance that your potential match is genuine and of legal age. Say goodbye to uncertainty and hello to safe connections.'
    },
    {
      icon: 'lock',
      useFa: false,
      title: 'Restricted Messaging',
      value: 'Verified users on Igneas can block unverified users from messaging them and enjoy an exclusive filter to hide unverified profiles in their searches. Unlock this premium perk with a subscription.'
    },
    {
      icon: 'history',
      useFa: false,
      title: 'Your Messages Stay There Until You Delete Them',
      value: 'On Igneas, even if someone blocks you, their messages remain visible to you, allowing you to report any concerning behavior without losing access to crucial evidence.'
    },
    {
      icon: 'shield-halved',
      useFa: true,
      title: 'Complete Privacy Control',
      value: 'Igneas gives you precise control over your privacy settings. With customizable filters, you decide who sees your profile and when. Plus, you retain full control over your data at all times.'
    },
  ]

}
