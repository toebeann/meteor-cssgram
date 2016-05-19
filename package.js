Package.describe({
  name: 'toadbomb:cssgram',
  version: '0.1.0',
  summary: 'The CSSgram Instagram filter library, packaged for use in Meteor.',
  git: 'https://github.com/toadbomb/meteor-cssgram.git',
  documentation: 'README.md'
});

Package.onUse(api => {
  api.versionsFrom('1.3.2.4');

  api.use([
    'meteor',
    'fourseven:scss@3.3.3'
  ]);

  api.addFiles([
    '1977.scss',
    '_shared.scss',
    'aden.scss',
    'brooklyn.scss',
    'clarendon.scss',
    'cssgram.scss',
    'earlybird.scss',
    'gingham.scss',
    'hudson.scss',
    'inkwell.scss',
    'lark.scss',
    'lofi.scss',
    'mayfair.scss',
    'moon.scss',
    'nashville.scss',
    'perpetua.scss',
    'reyes.scss',
    'rise.scss',
    'slumber.scss',
    'toaster.scss',
    'walden.scss',
    'willow.scss',
    'xpro2.scss'
  ], 'client');
});
